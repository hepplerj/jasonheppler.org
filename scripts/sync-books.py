#!/usr/bin/env python3
"""
Sync book log entries from micro.blog bookshelves into content/books/.

Pulls the "Currently reading" and "Finished reading" shelves via the
micro.blog Books JSON API and writes/updates Hugo front matter files:

  - new finished book   -> new file, categories [books, read]
  - new reading book    -> new file, categories [books, reading]
  - reading -> finished -> flips the existing file's category, updates date
  - re-read (finished again much later) -> updates date, appends read_dates

One-way sync: micro.blog is never modified, and existing files are only
touched for the category flip / re-read cases above.

Auth: reads MB_READ_LOG from the environment, falling back to .env in the
repo root. Publisher/pub_year/title cleanup come from Open Library by ISBN.

Usage:
    python scripts/sync-books.py                    # dry run (preview only)
    python scripts/sync-books.py --write            # actually write files
    python scripts/sync-books.py --since 2026-06-01 # override date cutoff
"""

import json
import os
import re
import sys
import time
import unicodedata
import urllib.parse
import urllib.request
from datetime import date, datetime, timedelta
from pathlib import Path

ROOT        = Path(__file__).parent.parent
BOOKS_DIR   = ROOT / "content" / "books"
API_BASE    = "https://micro.blog"
RATE_LIMIT_S = 1.5
# API date_published within this many days of an existing entry's date is
# the same read (micro.blog logging lag); beyond it, a newer date means a
# re-read and gets tracked in read_dates.
REREAD_GAP_DAYS = 180

# ---------------------------------------------------------------------------
# Auth
# ---------------------------------------------------------------------------

def load_token():
    token = os.environ.get("MB_READ_LOG", "").strip()
    if not token:
        env_file = ROOT / ".env"
        if env_file.exists():
            for line in env_file.read_text().splitlines():
                if line.strip().startswith("MB_READ_LOG"):
                    token = line.split("=", 1)[1].strip().strip('"').strip("'")
                    break
    if not token:
        sys.exit("error: MB_READ_LOG not set (env var or .env in repo root)")
    return token

# ---------------------------------------------------------------------------
# HTTP helpers
# ---------------------------------------------------------------------------

def api_get(path, token):
    req = urllib.request.Request(API_BASE + path,
                                 headers={"Authorization": f"Bearer {token}"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read())

USER_AGENT = "jasonheppler.org book sync (jason.heppler@gmail.com)"

def open_library_by_isbn(isbn):
    """Return {title, publisher, pub_year} for an ISBN, or {}."""
    url = f"https://openlibrary.org/isbn/{urllib.parse.quote(str(isbn))}.json"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        with urllib.request.urlopen(req, timeout=15) as r:
            info = json.loads(r.read())
    except Exception as e:
        print(f"    Open Library error ({isbn}): {e}")
        return {}
    title = info.get("title", "")
    if info.get("subtitle"):
        title = f"{title}: {info['subtitle']}"
    pub = (info.get("publishers") or [""])[0]
    m = re.search(r"\d{4}", info.get("publish_date", "") or "")
    year = m.group(0) if m else ""
    return {"title": title, "publisher": pub, "pub_year": year}

# ---------------------------------------------------------------------------
# Front matter parsing (same conventions as backfill-books.py)
# ---------------------------------------------------------------------------

FM_RE = re.compile(r"^---\n(.*?\n)---\n?(.*)", re.DOTALL)

def parse_file(path):
    m = FM_RE.match(path.read_text())
    if not m:
        return None, None
    return m.group(1).splitlines(keepends=True), m.group(2)

def fm_get(lines, key):
    for line in lines:
        m = re.match(rf"^{key}:\s*(.*)$", line)
        if m:
            return m.group(1).strip().strip('"').strip("'")
    return ""

def fm_categories(lines):
    cats, in_cats = [], False
    for line in lines:
        if re.match(r"^categories:", line):
            in_cats = True
            continue
        if in_cats:
            m = re.match(r"^\s+-\s*(.+)$", line)
            if m:
                cats.append(m.group(1).strip())
            else:
                in_cats = False
    return cats

# ---------------------------------------------------------------------------
# Matching
# ---------------------------------------------------------------------------

STOPWORDS = {"a", "an", "the", "of", "and", "in", "on", "to", "for", "novel",
             "edition", "second", "third", "revised", "updated", "complete"}

def norm_tokens(text):
    text = unicodedata.normalize("NFKD", text or "").encode("ascii", "ignore").decode()
    words = re.findall(r"[a-z0-9]+", text.lower())
    return [w for w in words if w not in STOPWORDS]

def match_key(title, author):
    """Loose key: author surname + first two significant title words."""
    surname = (author or "").strip().split()[-1].lower() if author else ""
    toks = norm_tokens(title)
    return surname + "|" + "-".join(toks[:2])

def build_index():
    """Index existing files by isbn and by loose author/title key."""
    by_isbn, by_key, entries = {}, {}, {}
    for path in sorted(BOOKS_DIR.glob("*.md")):
        if path.name == "_index.md":
            continue
        fm, _ = parse_file(path)
        if not fm:
            continue
        entry = {
            "path": path,
            "title": fm_get(fm, "title"),
            "author": fm_get(fm, "author"),
            "isbn": fm_get(fm, "isbn"),
            "date": fm_get(fm, "date"),
            "categories": fm_categories(fm),
        }
        entries[path] = entry
        if entry["isbn"]:
            by_isbn.setdefault(entry["isbn"], entry)
        by_key.setdefault(match_key(entry["title"], entry["author"]), entry)
    return by_isbn, by_key, entries

def find_existing(book, by_isbn, by_key):
    if book["isbn"] and book["isbn"] in by_isbn:
        return by_isbn[book["isbn"]]
    return by_key.get(match_key(book["title"], book["author"]))

# ---------------------------------------------------------------------------
# Writing
# ---------------------------------------------------------------------------

def slugify(title, max_len=60):
    text = unicodedata.normalize("NFKD", title).encode("ascii", "ignore").decode()
    slug = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    if len(slug) > max_len:
        slug = slug[:max_len].rsplit("-", 1)[0]
    return slug

def yaml_quote(value):
    return '"' + str(value).replace('"', '\\"') + '"'

def render_entry(book, category):
    lines = ["---",
             f"title: {yaml_quote(book['title'])}",
             f"author: {yaml_quote(book['author'])}",
             f"date: {book['date']}"]
    if book["isbn"]:
        lines.append(f"isbn: {book['isbn']}")
    lines += ["categories:", "  - books", f"  - {category}"]
    if book.get("pub_year"):
        lines.append(f"pub_year: {yaml_quote(book['pub_year'])}")
    if book.get("publisher"):
        lines.append(f"publisher: {yaml_quote(book['publisher'])}")
    lines += ["---", ""]
    return "\n".join(lines)

def parse_api_book(item):
    mb = item.get("_microblog", {})
    authors = [a.get("name", "") for a in item.get("authors", [])]
    return {
        "title": item.get("title", "").strip(),
        "author": ", ".join(a for a in authors if a),
        "isbn": str(mb.get("isbn", "") or ""),
        "date": (item.get("date_published") or "")[:10],
    }

def parse_iso(d):
    try:
        return date.fromisoformat(d[:10])
    except (ValueError, TypeError):
        return None

def enrich(book):
    """Fill publisher/pub_year (and clean up title) from Google Books."""
    if not book["isbn"]:
        return
    info = open_library_by_isbn(book["isbn"])
    time.sleep(RATE_LIMIT_S)
    if info.get("title") and len(norm_tokens(info["title"])) >= len(norm_tokens(book["title"])):
        book["title"] = info["title"]
    book["pub_year"] = info.get("pub_year", "")
    book["publisher"] = info.get("publisher", "")

def flip_to_read(entry, finished_date, write):
    """Rewrite an existing 'reading' entry as 'read' with the finished date."""
    path = entry["path"]
    text = path.read_text()
    text = re.sub(r"^(\s+-\s*)reading\s*$", r"\g<1>read", text, count=1, flags=re.M)
    text = re.sub(r"^date:.*$", f"date: {finished_date}", text, count=1, flags=re.M)
    if write:
        path.write_text(text)

def add_reread(entry, new_date, write):
    """Update date to the new read and track all finish dates in read_dates."""
    path = entry["path"]
    text = path.read_text()
    old_date = entry["date"]
    m = re.search(r"^read_dates:\n((?:\s+-\s*.+\n)+)", text, flags=re.M)
    if m:
        dates = re.findall(r"-\s*(\S+)", m.group(1))
        dates.append(new_date)
        block = "read_dates:\n" + "".join(f"  - {d}\n" for d in dates)
        text = text[:m.start()] + block + text[m.end():]
    else:
        block = f"read_dates:\n  - {old_date}\n  - {new_date}\n"
        text = re.sub(r"^---\n", "", text, count=1)
        text = "---\n" + re.sub(r"\n---\n", f"\n{block}---\n", text, count=1)
    text = re.sub(r"^date:.*$", f"date: {new_date}", text, count=1, flags=re.M)
    if write:
        path.write_text(text)

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    args = sys.argv[1:]
    write = "--write" in args
    since = None
    if "--since" in args:
        since = parse_iso(args[args.index("--since") + 1])

    token = load_token()
    by_isbn, by_key, entries = build_index()

    if since is None:
        # Look back a bit past the newest local entry to catch late logging,
        # without scanning deep into the old imported shelf history.
        newest = max((parse_iso(e["date"]) for e in entries.values()
                      if parse_iso(e["date"])), default=date(2017, 1, 1))
        since = newest - timedelta(days=60)
    print(f"Considering micro.blog shelf items since {since} "
          f"({'writing' if write else 'dry run'})\n")

    shelves = api_get("/books/bookshelves", token)
    shelf_ids = {s["_microblog"]["type"]: s["id"] for s in shelves.get("items", [])}
    plans = []  # (action description, callable)

    for shelf_type, category in (("finished", "read"), ("reading", "reading")):
        shelf_id = shelf_ids.get(shelf_type)
        if not shelf_id:
            print(f"warning: no '{shelf_type}' shelf found, skipping")
            continue
        items = api_get(f"/books/bookshelves/{shelf_id}", token).get("items", [])
        for item in items:
            book = parse_api_book(item)
            book_date = parse_iso(book["date"])
            if not book_date or book_date < since:
                continue
            existing = find_existing(book, by_isbn, by_key)

            if existing is None:
                enrich(book)
                slug = slugify(book["title"])
                path = BOOKS_DIR / f"{book['date']}-{slug}.md"
                content = render_entry(book, category)
                plans.append((f"NEW {category:8} {path.name}",
                              (lambda p=path, c=content: p.write_text(c)) if write else None))
            elif category == "read" and "reading" in existing["categories"]:
                plans.append((f"FINISH        {existing['path'].name}  (reading -> read, date {book['date']})",
                              (lambda e=existing, d=book["date"]: flip_to_read(e, d, True)) if write else None))
            elif category == "read" and "read" in existing["categories"]:
                old = parse_iso(existing["date"])
                if old and book_date > old + timedelta(days=REREAD_GAP_DAYS):
                    plans.append((f"RE-READ       {existing['path'].name}  ({existing['date']} + {book['date']})",
                                  (lambda e=existing, d=book["date"]: add_reread(e, d, True)) if write else None))

    if not plans:
        print("Nothing new — content/books/ is up to date.")
        return
    for desc, action in plans:
        print(("  " if write else "  would: ") + desc)
        if action:
            action()
    print(f"\n{len(plans)} change(s)" + ("" if write else " — run with --write to apply"))

if __name__ == "__main__":
    main()

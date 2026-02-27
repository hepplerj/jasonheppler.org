#!/usr/bin/env python3
"""
Back-fill metadata (isbn, pub_year, publisher) for existing book pages
using the Google Books API (no API key required).

Also normalises `year:` → `pub_year:` and removes `shorttitle:` in place.

Usage:
    python scripts/backfill-books.py              # dry run (preview only)
    python scripts/backfill-books.py --write      # actually update files
    python scripts/backfill-books.py --since 2021 # only files from 2021+
    python scripts/backfill-books.py --write --since 2021
"""

import json
import os
import re
import sys
import time
import urllib.request
import urllib.parse
from pathlib import Path

BOOKS_DIR   = Path(__file__).parent.parent / "content" / "books"
DEFAULT_SINCE = 2019
RATE_LIMIT_S  = 0.5   # seconds between API calls

# ---------------------------------------------------------------------------
# Front matter helpers
# ---------------------------------------------------------------------------

FM_RE = re.compile(r"^---\n(.*?\n)---\n(.*)", re.DOTALL)

def parse_file(path):
    """Return (fm_lines, body) where fm_lines is a list of raw strings."""
    text = path.read_text(encoding="utf-8")
    m = FM_RE.match(text)
    if not m:
        return None, text
    return m.group(1).splitlines(keepends=True), m.group(2)

def fm_get(lines, key):
    """Return the value for `key:` in front matter lines, or ''."""
    pat = re.compile(rf'^{re.escape(key)}:\s*["\']?(.*?)["\']?\s*$')
    for line in lines:
        m = pat.match(line.rstrip())
        if m:
            return m.group(1).strip().strip('"\'')
    return ""

def fm_set(lines, key, value):
    """Update or append `key: "value"` in front matter lines."""
    pat = re.compile(rf'^{re.escape(key)}:')
    new_line = f'{key}: "{value}"\n'
    for i, line in enumerate(lines):
        if pat.match(line):
            lines[i] = new_line
            return lines
    # key not present — insert before first blank line or at end
    for i, line in enumerate(lines):
        if line.strip() == "":
            lines.insert(i, new_line)
            return lines
    lines.append(new_line)
    return lines

def fm_rename(lines, old_key, new_key):
    """Rename a front matter key, preserving its value."""
    pat = re.compile(rf'^{re.escape(old_key)}:\s*(.*)')
    for i, line in enumerate(lines):
        m = pat.match(line.rstrip())
        if m:
            lines[i] = f'{new_key}: {m.group(1)}\n'
            return True
    return False

def fm_delete(lines, key):
    """Remove a key from front matter lines."""
    pat = re.compile(rf'^{re.escape(key)}:')
    lines[:] = [l for l in lines if not pat.match(l)]

def rebuild(fm_lines, body):
    return "---\n" + "".join(fm_lines) + "---\n" + body

# ---------------------------------------------------------------------------
# Google Books API
# ---------------------------------------------------------------------------

def google_books(title, author=""):
    parts = [f"intitle:{urllib.parse.quote(title)}"]
    if author:
        # Use last token (often the surname) for broader matching
        surname = author.strip().split()[-1]
        parts.append(f"inauthor:{urllib.parse.quote(surname)}")
    url = "https://www.googleapis.com/books/v1/volumes?q=" + "+".join(parts) + "&maxResults=3"
    try:
        with urllib.request.urlopen(url, timeout=10) as r:
            data = json.loads(r.read())
    except Exception as e:
        print(f"    API error: {e}")
        return {}

    items = data.get("items", [])
    if not items:
        return {}

    # Pick the first item that has at least a publisher or ISBN
    for item in items:
        info = item.get("volumeInfo", {})
        ids  = {i["type"]: i["identifier"]
                for i in info.get("industryIdentifiers", [])}
        isbn = ids.get("ISBN_13") or ids.get("ISBN_10", "")
        pub  = info.get("publisher", "")
        year = (info.get("publishedDate") or "")[:4]
        if isbn or pub or year:
            return {"isbn": isbn, "publisher": pub, "pub_year": year}

    return {}

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    args   = set(sys.argv[1:])
    do_write = "--write" in args

    since = DEFAULT_SINCE
    for a in sys.argv[1:]:
        if a.startswith("--since"):
            # handle --since=2021 or --since 2021
            if "=" in a:
                since = int(a.split("=", 1)[1])
            else:
                idx = sys.argv.index(a)
                if idx + 1 < len(sys.argv):
                    since = int(sys.argv[idx + 1])

    if not do_write:
        print(f"DRY RUN — pass --write to save changes (showing books since {since})\n")
    else:
        print(f"WRITING changes for books since {since}\n")

    files = sorted(BOOKS_DIR.glob("*.md"))
    # Filter to files whose name starts with a year >= since
    files = [f for f in files if re.match(r"^\d{4}", f.name)
             and int(f.name[:4]) >= since]

    updated = skipped = looked_up = not_found = 0

    for path in files:
        fm_lines, body = parse_file(path)
        if fm_lines is None:
            continue

        changed = False

        # 1. Rename year → pub_year
        if fm_rename(fm_lines, "year", "pub_year"):
            changed = True

        # 2. Remove shorttitle
        if any(l.startswith("shorttitle:") for l in fm_lines):
            fm_delete(fm_lines, "shorttitle")
            changed = True

        # 3. Check for missing metadata
        title     = fm_get(fm_lines, "title")
        author    = fm_get(fm_lines, "author")
        isbn      = fm_get(fm_lines, "isbn")
        pub_year  = fm_get(fm_lines, "pub_year")
        publisher = fm_get(fm_lines, "publisher")

        needs_lookup = not isbn or not pub_year or not publisher

        if needs_lookup and title:
            print(f"  Looking up: {title} / {author}")
            result = google_books(title, author)
            looked_up += 1
            time.sleep(RATE_LIMIT_S)

            if result:
                if not isbn and result.get("isbn"):
                    fm_set(fm_lines, "isbn", result["isbn"])
                    changed = True
                    print(f"    isbn      → {result['isbn']}")
                if not pub_year and result.get("pub_year"):
                    fm_set(fm_lines, "pub_year", result["pub_year"])
                    changed = True
                    print(f"    pub_year  → {result['pub_year']}")
                if not publisher and result.get("publisher"):
                    fm_set(fm_lines, "publisher", result["publisher"])
                    changed = True
                    print(f"    publisher → {result['publisher']}")
            else:
                print(f"    not found in Google Books")
                not_found += 1

        if changed:
            updated += 1
            if do_write:
                path.write_text(rebuild(fm_lines, body), encoding="utf-8")
                print(f"  Saved: {path.name}")
        else:
            skipped += 1

    print(f"\nDone.")
    print(f"  Files checked:    {len(files)}")
    print(f"  API lookups:      {looked_up}")
    print(f"  Not found:        {not_found}")
    print(f"  Files to update:  {updated}")
    print(f"  Already complete: {skipped}")
    if not do_write and updated:
        print(f"\nRun with --write to apply changes.")

if __name__ == "__main__":
    main()

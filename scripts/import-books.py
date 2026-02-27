#!/usr/bin/env python3
"""
Import books from microblog_books.csv into content/books/.
- Skips 'Want to read'
- Deduplicates by ISBN against existing files
- Missing dates → 2017-01-01 (pre-2018 placeholder)
"""

import csv
import os
import re
import glob

BOOKS_DIR = os.path.join(os.path.dirname(__file__), "../content/books")
CSV_PATH  = os.path.join(os.path.dirname(__file__), "../microblog_books.csv")
DEFAULT_DATE = "2017-01-01"

SHELF_TO_CATEGORIES = {
    "Currently reading": ["books", "reading"],
    "Finished reading":  ["books", "read"],
    "American West":     ["books", "read"],
}

def slugify(text):
    text = text.lower()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    text = re.sub(r"-+", "-", text)
    return text.strip("-")[:60]

def collect_existing_isbns():
    isbns = set()
    for path in glob.glob(os.path.join(BOOKS_DIR, "*.md")):
        with open(path) as f:
            for line in f:
                m = re.match(r'^isbn:\s*["\']?([0-9X]+)["\']?', line.strip())
                if m:
                    isbns.add(m.group(1).strip())
    return isbns

def yaml_str(val):
    # Wrap in quotes if value contains special chars
    if any(c in str(val) for c in [':', '#', '[', ']', '{', '}', '&', '*', '!', '|', "'", '"', '>']):
        escaped = str(val).replace('"', '\\"')
        return f'"{escaped}"'
    return str(val)

def write_book(title, author, isbn, categories, date_str, shorttitle=None):
    slug = slugify(title)
    filename = f"{date_str}-{slug}.md"
    filepath = os.path.join(BOOKS_DIR, filename)

    # Avoid clobbering existing files with the same name
    if os.path.exists(filepath):
        slug = slug[:55] + "-x"
        filename = f"{date_str}-{slugify(title)[:55]}-x.md"
        filepath = os.path.join(BOOKS_DIR, filename)

    cats_yaml = "\n".join(f"- {c}" for c in categories)
    short = shorttitle or title[:50]

    content = f"""---
title: {yaml_str(title)}
shorttitle: {yaml_str(short)}
author: {yaml_str(author)}
date: {date_str}
isbn: {yaml_str(isbn)}
categories:
{cats_yaml}
---
"""
    with open(filepath, "w") as f:
        f.write(content)
    return filename

def main():
    existing_isbns = collect_existing_isbns()
    print(f"Existing ISBNs in system: {len(existing_isbns)}")

    skipped_want  = 0
    skipped_dup   = 0
    skipped_noisbn = 0
    created       = 0
    defaulted     = 0

    with open(CSV_PATH, newline="", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    for row in rows:
        shelf  = row.get("Bookshelves", "").strip()
        title  = row.get("Title", "").strip()
        author = row.get("Author", "").strip()
        isbn   = row.get("ISBN", "").strip()
        date   = row.get("Date Read", "").strip()

        if not title:
            continue

        if shelf == "Want to read":
            skipped_want += 1
            continue

        if shelf not in SHELF_TO_CATEGORIES:
            # Unknown shelf — treat as finished
            categories = ["books", "read"]
        else:
            categories = SHELF_TO_CATEGORIES[shelf]

        if isbn and isbn in existing_isbns:
            skipped_dup += 1
            continue

        if not isbn:
            skipped_noisbn += 1
            # Still create the file — just no ISBN to dedup on
            isbn = ""

        if not date:
            date = DEFAULT_DATE
            defaulted += 1
        else:
            # Normalise to YYYY-MM-DD
            date = date[:10]

        fname = write_book(title, author, isbn, categories, date)
        created += 1
        if isbn:
            existing_isbns.add(isbn)  # prevent dupes within this run

    print(f"Created:          {created}")
    print(f"  (defaulted date): {defaulted}")
    print(f"Skipped (dup ISBN): {skipped_dup}")
    print(f"Skipped (want-to-read): {skipped_want}")
    print(f"No ISBN (still created): {skipped_noisbn}")

if __name__ == "__main__":
    main()

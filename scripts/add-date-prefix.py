#!/usr/bin/env python3
"""Add date prefixes to page bundle directories that are missing them.

Reads the `date:` from each index.md front matter and renames the directory
using `git mv` to preserve history. Also normalizes underscores to hyphens.
"""

import os
import re
import subprocess
import sys

CONTENT_DIR = os.path.join(os.path.dirname(__file__), "..", "content")
SECTIONS = ["blog", "notes", "links"]
DATE_PREFIX_RE = re.compile(r"^\d{4}-\d{2}-\d{2}-")
# Match date in YAML front matter (handles various ISO 8601 formats)
FRONT_MATTER_DATE_RE = re.compile(r"^date:\s*['\"]?(\d{4}-\d{2}-\d{2})", re.MULTILINE)

dry_run = "--dry-run" in sys.argv


def extract_date(index_path):
    """Extract YYYY-MM-DD from front matter date field."""
    with open(index_path, "r") as f:
        content = f.read()
    match = FRONT_MATTER_DATE_RE.search(content)
    if match:
        return match.group(1)
    return None


def main():
    renames = []

    for section in SECTIONS:
        section_path = os.path.join(CONTENT_DIR, section)
        if not os.path.isdir(section_path):
            print(f"Skipping {section}/ (not found)")
            continue

        for entry in sorted(os.listdir(section_path)):
            entry_path = os.path.join(section_path, entry)
            if not os.path.isdir(entry_path):
                continue

            # Skip if already has a date prefix
            if DATE_PREFIX_RE.match(entry):
                continue

            index_path = os.path.join(entry_path, "index.md")
            if not os.path.isfile(index_path):
                print(f"  SKIP (no index.md): {section}/{entry}")
                continue

            date = extract_date(index_path)
            if not date:
                print(f"  SKIP (no date found): {section}/{entry}")
                continue

            # Normalize underscores to hyphens in slug
            slug = entry.replace("_", "-")
            new_name = f"{date}-{slug}"
            new_path = os.path.join(section_path, new_name)

            if os.path.exists(new_path):
                print(f"  CONFLICT: {section}/{new_name} already exists!")
                continue

            renames.append((entry_path, new_path, f"{section}/{entry}", f"{section}/{new_name}"))

    print(f"\n{len(renames)} directories to rename\n")

    if dry_run:
        for _, _, old_rel, new_rel in renames:
            print(f"  {old_rel} -> {new_rel}")
        print("\nDry run complete. Run without --dry-run to apply.")
        return

    errors = 0
    for old_path, new_path, old_rel, new_rel in renames:
        try:
            subprocess.run(
                ["git", "mv", old_path, new_path],
                check=True,
                capture_output=True,
                text=True,
            )
            print(f"  {old_rel} -> {new_rel}")
        except subprocess.CalledProcessError as e:
            print(f"  ERROR: {old_rel}: {e.stderr.strip()}")
            errors += 1

    print(f"\nDone. {len(renames) - errors} renamed, {errors} errors.")


if __name__ == "__main__":
    main()

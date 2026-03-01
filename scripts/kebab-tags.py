#!/usr/bin/env python3
"""Convert spaced tags to kebab-case across all content files."""

import os
import re
import sys

TYPOS = {
    "digital historuy": "digital-history",
}

def to_kebab(tag):
    tag = tag.strip().strip('"\'')
    if tag in TYPOS:
        return TYPOS[tag]
    tag = tag.replace("&", "and")
    tag = tag.lower()
    tag = re.sub(r"[\s_]+", "-", tag)
    tag = re.sub(r"-+", "-", tag)
    return tag.strip("-")

def process_inline(line):
    """Handle: tags: [foo, bar baz, qux]"""
    m = re.match(r"^(tags:\s*\[)(.+)(\].*)$", line)
    if not m:
        return line, False
    prefix, tags_str, suffix = m.groups()
    tags = [t.strip() for t in tags_str.split(",")]
    new_tags = [to_kebab(t) for t in tags]
    changed = new_tags != tags
    return prefix + ", ".join(new_tags) + suffix, changed

def process_file(filepath, dry_run=False):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    if not content.startswith("---"):
        return []

    end = content.find("---", 3)
    if end == -1:
        return []

    lines = content.splitlines(keepends=True)
    new_lines = []
    in_tags_block = False
    changes = []

    for line in lines:
        stripped = line.rstrip("\n")

        # Inline format: tags: [a, b, c]
        if re.match(r"^tags:\s*\[", stripped):
            new_line, changed = process_inline(stripped)
            if changed:
                changes.append(f"  inline: {stripped!r} → {new_line!r}")
            new_lines.append(new_line + "\n")
            in_tags_block = False
            continue

        # Block format start: tags:
        if re.match(r"^tags:\s*$", stripped):
            in_tags_block = True
            new_lines.append(line)
            continue

        # Block format item: "  - some tag"
        if in_tags_block and re.match(r"^\s+-\s+", stripped):
            m = re.match(r"^(\s+-\s+)(.+)$", stripped)
            if m:
                prefix, tag = m.groups()
                new_tag = to_kebab(tag)
                if new_tag != tag.strip().strip("\"'"):
                    changes.append(f"  block: {tag!r} → {new_tag!r}")
                new_lines.append(prefix + new_tag + "\n")
                continue

        # Any non-indented line ends a block tags section
        if in_tags_block and stripped and not stripped.startswith(" "):
            in_tags_block = False

        new_lines.append(line)

    if not changes:
        return []

    if not dry_run:
        with open(filepath, "w", encoding="utf-8") as f:
            f.writelines(new_lines)

    return changes

def main():
    dry_run = "--dry-run" in sys.argv
    content_dir = os.path.join(os.path.dirname(__file__), "..", "content")
    total_files = 0
    total_changes = 0

    for root, dirs, files in os.walk(content_dir):
        for fname in files:
            if not fname.endswith(".md"):
                continue
            fpath = os.path.join(root, fname)
            changes = process_file(fpath, dry_run=dry_run)
            if changes:
                total_files += 1
                total_changes += len(changes)
                rel = os.path.relpath(fpath, content_dir)
                print(f"\n{rel}")
                for c in changes:
                    print(c)

    print(f"\n{'DRY RUN — ' if dry_run else ''}Done: {total_changes} tag(s) in {total_files} file(s) updated.")

if __name__ == "__main__":
    main()

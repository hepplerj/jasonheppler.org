#!/usr/bin/env python3
"""Convert old *[...]*  contextual blocks to <aside> HTML."""

import os
import re
import sys

def md_links_to_html(text):
    """Convert Markdown links inside the aside content to HTML."""
    # italic links: *[text](url)* → <em><a href="url">text</a></em>
    text = re.sub(
        r'\*\[([^\]]+)\]\(([^)]+)\)\*',
        r'<em><a href="\2">\1</a></em>',
        text
    )
    # regular links: [text](url) → <a href="url">text</a>
    text = re.sub(
        r'\[([^\]]+)\]\(([^)]+)\)',
        r'<a href="\2">\1</a>',
        text
    )
    return text

def convert_asides(content):
    """Find and replace *[...]*  blocks with <aside> HTML."""
    # Match *[ ... ]* where ]* is not preceded by ) (to avoid inline italic links)
    # Uses non-greedy to get the shortest match; DOTALL for multiline blocks
    pattern = re.compile(r'\*\[(.*?)\]\*', re.DOTALL)

    def replacer(m):
        inner = m.group(1).strip()
        # Only convert if it looks like a standalone block (contains spaces/sentences)
        # and is not just a short inline italic link like *[Book Title](url)*
        # Standalone blocks won't have their content start/end with a URL pattern
        if re.match(r'^[^\]]+\]\([^)]+\)$', inner):
            # This is just *[text](url)* — an inline italic link, skip it
            return m.group(0)
        inner_html = md_links_to_html(inner)
        # Normalize whitespace: collapse internal newlines to spaces
        inner_html = re.sub(r'\s+', ' ', inner_html).strip()
        return f'<aside><p>{inner_html}</p></aside>'

    return pattern.sub(replacer, content)

def process_file(filepath, dry_run=False):
    with open(filepath, 'r', encoding='utf-8') as f:
        original = f.read()

    converted = convert_asides(original)

    if converted == original:
        return False

    if dry_run:
        # Show a diff-like summary
        orig_lines = original.splitlines()
        new_lines = converted.splitlines()
        for i, (o, n) in enumerate(zip(orig_lines, new_lines)):
            if o != n:
                print(f"  line {i+1}:")
                print(f"  - {o[:120]}")
                print(f"  + {n[:120]}")
        # Handle length differences (multiline → single line)
        if len(new_lines) < len(orig_lines):
            print(f"  (collapsed {len(orig_lines) - len(new_lines)} line(s))")
    else:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(converted)

    return True

def main():
    dry_run = '--dry-run' in sys.argv
    content_dir = os.path.join(os.path.dirname(__file__), '..', 'content')
    total = 0

    for root, dirs, files in os.walk(content_dir):
        for fname in files:
            if not fname.endswith('.md'):
                continue
            fpath = os.path.join(root, fname)
            rel = os.path.relpath(fpath, content_dir)
            changed = process_file(fpath, dry_run=dry_run)
            if changed:
                total += 1
                print(f"\n{rel}")

    print(f"\n{'DRY RUN — ' if dry_run else ''}Done: {total} file(s) updated.")

if __name__ == '__main__':
    main()

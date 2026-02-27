#!/usr/bin/env python3
"""
Migrate post-2020 longform posts from microblog/ to content/blog/

Usage:
  python3 scripts/migrate-longform.py --dry-run   # preview only
  python3 scripts/migrate-longform.py             # run migration
"""

import re
import sys
import urllib.request
from datetime import date, datetime
from pathlib import Path

import yaml

BASE_DIR = Path(__file__).parent.parent
MICROBLOG_DIR = BASE_DIR / "microblog/content"
BLOG_DIR = BASE_DIR / "content/blog"
IMAGES_DIR = BASE_DIR / "static/assets/images"
YEARS = ["2020", "2021", "2022", "2023", "2024", "2025", "2026"]
DRY_RUN = "--dry-run" in sys.argv

# Categories to strip from tags (they're structural, not descriptive)
STRIP_CATEGORIES = {"Longform", "Microposts", "photo"}

# CDN pattern — full URL form
CDN_PATTERN = re.compile(
    r'https://cdn\.uploads\.micro\.blog/\d+/\d{4}/[\w\-\.]+\.(?:jpg|jpeg|png|gif|webp)',
    re.IGNORECASE,
)

# Relative uploads path — e.g. uploads/2025/filename.png (same CDN, user 2634)
CDN_RELATIVE_PATTERN = re.compile(
    r'uploads/(\d{4})/([\w\-\.]+\.(?:jpg|jpeg|png|gif|webp))',
    re.IGNORECASE,
)
CDN_USER_ID = "2634"


# ---------------------------------------------------------------------------
# YAML helpers
# ---------------------------------------------------------------------------

def str_representer(dumper, data):
    """Force block style for multiline strings."""
    if "\n" in data:
        return dumper.represent_scalar("tag:yaml.org,2002:str", data, style="|")
    return dumper.represent_scalar("tag:yaml.org,2002:str", data)


yaml.add_representer(str, str_representer)


def format_date(d):
    if isinstance(d, datetime):
        return d.isoformat()
    if isinstance(d, date):
        return d.strftime("%Y-%m-%dT00:00:00-06:00")
    return str(d) if d else None


# ---------------------------------------------------------------------------
# Parsing
# ---------------------------------------------------------------------------

def parse_post(filepath):
    """Return (front_matter_dict, content_str) or (None, raw_text)."""
    text = filepath.read_text(encoding="utf-8")
    if not text.startswith("---"):
        return None, text
    end = text.find("---", 3)
    if end == -1:
        return None, text
    try:
        fm = yaml.safe_load(text[3:end])
    except Exception as e:
        print(f"  YAML error in {filepath}: {e}")
        return None, text
    content = text[end + 3:].lstrip("\n")
    return fm, content


def is_longform(fm, filepath):
    if not isinstance(fm, dict):
        return False
    if fm.get("microblog") is not False:
        return False
    if "Longform" not in fm.get("categories", []):
        return False
    # Skip Letterboxd film reviews (title contains star rating character)
    if "★" in (fm.get("title") or ""):
        return False
    # Skip timestamp-only slugs (e.g. "221925.md") — duplicates of slug-named versions
    if re.fullmatch(r"\d+", filepath.stem):
        return False
    return True


# ---------------------------------------------------------------------------
# Slug / filename
# ---------------------------------------------------------------------------

def get_date_str(fm):
    d = fm.get("date")
    if isinstance(d, (datetime, date)):
        return d.strftime("%Y-%m-%d")
    return str(d)[:10] if d else "0000-00-00"


def get_year(fm):
    return get_date_str(fm)[:4]


def get_slug(fm, filepath):
    url = fm.get("url", "")
    if url:
        parts = [p for p in url.strip("/").split("/") if p]
        if parts:
            return parts[-1]
    return filepath.stem


# ---------------------------------------------------------------------------
# Front matter transform
# ---------------------------------------------------------------------------

def transform_front_matter(fm):
    new = {}
    if fm.get("title"):
        new["title"] = fm["title"]
    new["date"] = format_date(fm.get("date"))
    if fm.get("lastmod"):
        new["lastmod"] = format_date(fm["lastmod"])
    tags = [c for c in fm.get("categories", []) if c not in STRIP_CATEGORIES]
    if tags:
        new["tags"] = tags
    if fm.get("custom_summary") and fm.get("summary"):
        new["lede"] = fm["summary"]
    return new


# ---------------------------------------------------------------------------
# Image downloading
# ---------------------------------------------------------------------------

def download_image(url, year):
    filename = url.split("/")[-1]
    year_dir = IMAGES_DIR / year
    local_path = year_dir / filename
    local_url = f"/assets/images/{year}/{filename}"

    if DRY_RUN:
        return local_url

    year_dir.mkdir(parents=True, exist_ok=True)
    if local_path.exists():
        return local_url

    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=20) as resp:
            local_path.write_bytes(resp.read())
        print(f"      ↓ {filename}")
    except Exception as e:
        print(f"      ✗ {filename}: {e}")
        return url  # keep original URL on failure

    return local_url


def rewrite_image_urls(content, year):
    """Download all CDN images and rewrite URLs in content."""
    # Full CDN URLs
    full_urls = list(set(CDN_PATTERN.findall(content)))
    url_map = {u: download_image(u, year) for u in full_urls}

    # Relative uploads/YYYY/filename paths — expand to full CDN URL then download
    for match in CDN_RELATIVE_PATTERN.finditer(content):
        rel_path = match.group(0)          # uploads/2025/file.png
        img_year = match.group(1)          # 2025
        filename = match.group(2)          # file.png
        full_url = f"https://cdn.uploads.micro.blog/{CDN_USER_ID}/{img_year}/{filename}"
        local = download_image(full_url, img_year)
        url_map[rel_path] = local

    for old, new in url_map.items():
        content = content.replace(old, new)
    return content


# ---------------------------------------------------------------------------
# Existing post detection
# ---------------------------------------------------------------------------

def find_existing_post(slug):
    """Return path of existing blog post containing this slug, or None."""
    for f in BLOG_DIR.glob("*.md"):
        if slug in f.stem:
            return f
    return None


# ---------------------------------------------------------------------------
# Main migration logic
# ---------------------------------------------------------------------------

def migrate_post(filepath):
    fm, content = parse_post(filepath)
    if not is_longform(fm, filepath):
        return False

    date_str = get_date_str(fm)
    year = get_year(fm)
    slug = get_slug(fm, filepath)
    new_filename = f"{date_str}-{slug}.md"
    new_path = BLOG_DIR / new_filename

    title = fm.get("title", "(no title)")
    image_count = len(set(CDN_PATTERN.findall(content)))
    existing = find_existing_post(slug)

    print(f"\n  {'[DRY RUN] ' if DRY_RUN else ''}→ {new_filename}")
    print(f"    Title:  {title}")
    print(f"    Images: {image_count} CDN url(s) to rewrite")
    if existing:
        print(f"    Replaces: {existing.name}")

    content = rewrite_image_urls(content, year)
    new_fm = transform_front_matter(fm)

    if not DRY_RUN:
        fm_yaml = yaml.dump(
            new_fm, default_flow_style=False, allow_unicode=True, sort_keys=False
        )
        new_path.write_text(f"---\n{fm_yaml}---\n\n{content}", encoding="utf-8")
        if existing and existing.resolve() != new_path.resolve():
            existing.unlink()
            print(f"    Removed old: {existing.name}")

    return True


def main():
    label = "DRY RUN — " if DRY_RUN else ""
    print(f"{label}Migrating longform posts (2020+)\n{'=' * 50}")

    count = 0
    for year in YEARS:
        year_dir = MICROBLOG_DIR / year
        if not year_dir.exists():
            continue
        posts = sorted(year_dir.rglob("*.md"))
        year_count = 0
        for filepath in posts:
            if migrate_post(filepath):
                count += 1
                year_count += 1
        if year_count:
            print(f"\n  [{year}: {year_count} posts]")

    print(f"\n{'=' * 50}")
    print(f"{'Would migrate' if DRY_RUN else 'Migrated'} {count} longform posts total")


if __name__ == "__main__":
    main()

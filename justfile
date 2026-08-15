# List available commands
default:
    @just --list

# Sync book log from micro.blog (dry run; pass --write to apply)
sync-books *ARGS:
    python3 scripts/sync-books.py {{ARGS}}

# Run local dev server
serve:
    hugo serve --port 1313 --buildDrafts --buildFuture --disableFastRender

# Build the site for production
build:
    rm -rf public/*
    hugo --cleanDestinationDir --minify

# Build and deploy to production
deploy: build
    sh scripts/permissions_fix.sh
    rsync --omit-dir-times --exclude-from=rsync-excludes \
        --checksum -avz \
        --itemize-changes \
        public/ reclaim:~/public_html/ | egrep -v '^\.'

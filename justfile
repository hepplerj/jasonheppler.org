# List available commands
default:
    @just --list

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

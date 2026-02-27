serve :
	hugo serve --port 1313 --buildDrafts --buildFuture --disableFastRender

build :
	rm -rf public/*
	hugo --cleanDestinationDir --minify
	npx pagefind --site public

deploy : build

	sh scripts/permissions_fix.sh

	rsync --omit-dir-times --exclude-from=rsync-excludes \
		--checksum -avz \
		--itemize-changes \
		public/ reclaim:~/public_html/ | egrep -v '^\.'

.PHONY: serve build set_permissions deploy

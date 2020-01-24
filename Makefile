preview :
	hugo serve --port 1313 --buildDrafts --buildFuture --disableFastRender

build :
	rm -rf public/*
	hugo --cleanDestinationDir --minify

deploy : build 
	rsync --omit-dir-times --exclude-from=rsync-excludes \
		--checksum -avz \
		--itemize-changes \
		public/ reclaim:~/public_html/ | egrep -v '^\.'

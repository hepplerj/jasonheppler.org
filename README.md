# JasonHeppler.org  Site Source

This repository contains the source for my personal site at 
[http://jasonheppler.org](http://jasonheppler.org). The site runs on 
[Jekyll](https://github.com/mojombo/jekyll). 

# Terms of Use

I'm more than pleased if you wish to borrow from my design but please be sure 
that *content* (anything inside `_posts` or `pages`, etc) is removed before you 
launch your site. If you don't understand it or didn't write it, remove it. 
Test everything locally before uploading your site.

Thanks!

[Jason A. Heppler](http://jasonheppler.org) | University of Nebraska at Omaha

# Getting Started

## Dependences

- **Ruby**: >2.0 with Bundler >1.10
- **Node**: >4.2 and Yo >1.7.0
- **Gulp**: install `gulp-cli`: `npm install gulp-cli -g`

1. Install Bundler, then run `bundle install`
2. Install Node.js, then run `npm install`
3. To start, run `gulp`. A development version of the site will generate and open at `http://localhost:4000`

## Usage

### `gulp [--prod]`

The default command and the one used most often. The command builds assets and site with development settings, including sourcemaps and drafts. Any changes made to posts, pages, and assets will be updated automatically and update in the browser via BrowserSync.

> `--prod`

When ready to verify everything works in production, running with the flag `--prod` will minify and gzip CSS, JS, and HTML and images will be compressed. Jekyll will generate a site with all posts but no drafts.

### `gulp build [--prod]`

Identical to `gulp [--prod]` but does not create a BrowserSync session.

### `gulp check`

Runs `bundle exec jekyll doctor` to find potential errors.

### `gulp clean`

Deletes assets from the `.tmp` directory as well as `prod` and deletes gzipped files. 

### `gulp rebuild`

Only use this to regenerate everything. The command deletes everything (assets, images, and generated Jekyll site).

Gulp tasks inspired by [Made Mistakes](https://github.com/mmistakes/made-mistakes-jekyll).

### `gulp deploy`

When development is done and the site has been built with either `gulp --prod` or `gulp build --prod` you can deploy with rsync. Sitemap is submitted to Google and Bing.

# Licensing

All the content (files and folders in `_posts`) along with the HTML files and 
index are under the [Attribution 3.0 Unported (CC BY 
3.0)](http://creativecommons.org/licenses/by/3.0/) license (in short, my work 
is my contribution to free culture.) Feel free to use the HTML and CSS as you 
please. If you do use them, I would appreciate a link back to 
[http://github.com/hepplerj/jasonheppler.org](http://github.com/hepplerj/jasonheppler.org). 

# JasonHeppler.org  Site Source

This repository contains the source for my personal site at 
[http://jasonheppler.org](http://jasonheppler.org). The site runs on 
[Hugo](https://gohugo.io). 

# Terms of Use

I'm more than pleased if you wish to borrow from my design but please be sure 
that *content* (anything inside `content` or `pages`, etc) is removed before you 
launch your site. If you don't understand it or didn't write it, remove it. 
Test everything locally before uploading your site.

Thanks!

[Jason A. Heppler](http://jasonheppler.org)

# Getting Started

## Dependences

- **Hugo**: >0.55.6
- **Node**: >4.2 and Yo >1.7.0
- **Gulp**: install `gulp-cli`: `npm install gulp-cli -g`

1. Install Node.js, then run `npm install`
2. To start, run `gulp`. A development version of the site will generate and open at `http://localhost:1313`

## Usage

### `gulp

The default command and the one used most often. The command builds assets and site with development settings, including sourcemaps and drafts. Any changes made to posts, pages, and assets will be updated automatically and update in the browser via BrowserSync.

### `gulp build

Build a production version of the site in `public/`.

### `gulp clean`

Deletes assets from the `public` directory.

### `gulp deploy`

When development is done and the site has been built with either `gulp site:build` or `gulp build` you can deploy with rsync. Sitemap is submitted to Google and Bing.

# Licensing

All the content (files and folders in `content`) along with the HTML files and 
index are under the [Attribution 3.0 Unported (CC BY 
3.0)](http://creativecommons.org/licenses/by/3.0/) license (in short, my work 
is my contribution to free culture.) Feel free to use the HTML and CSS as you 
please. If you do use them, I would appreciate a link back to 
[http://github.com/hepplerj/jasonheppler.org](http://github.com/hepplerj/jasonheppler.org). 

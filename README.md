# JasonHeppler.org  Site Source

This repository contains the source for my personal site at 
[http://jasonheppler.org](http://jasonheppler.org). The site runs on 
[Hugo](https://gohugo.io). 

# Terms of Use

I'm more than pleased if you wish to borrow from my design but please be sure 
that *content* (anything inside `content` or `pages`, etc) is removed before you 
launch your site. If you don't understand it or didn't write it, remove it. 
Test everything locally before uploading your site.

# Getting Started

## Dependences

- **Hugo**: >0.55.6
- **Make**: >3.8

To start, run `make preview`. A development version of the site will generate and open at `http://localhost:1313`

## Usage

### `make preview`

The default command and the one used most often. The command builds assets and site with development settings, including sourcemaps and drafts. Any changes made to posts, pages, and assets will be updated automatically and update in the browser via BrowserSync.

### `make build`

Build a production version of the site in `public/`.

### `make deploy`

When development is done and the site has been built with either `gulp site:build` or `gulp build` you can deploy with rsync. Sitemap is submitted to Google and Bing.

# Licensing

All the content (files and folders in `content`) along with the HTML files and 
index are under the [Attribution 3.0 Unported (CC BY 
3.0)](http://creativecommons.org/licenses/by/3.0/) license (in short, my work 
is my contribution to free culture.) Feel free to use the HTML and CSS as you 
please. If you do use them, I would appreciate a link back to 
[http://github.com/hepplerj/jasonheppler.org](http://github.com/hepplerj/jasonheppler.org). 

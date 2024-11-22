# JasonHeppler.org  Site Source

[![Build Status](https://img.shields.io/static/v1.svg?label=CSL&message=software%20against%20climate%20change&color=green?style=flat&logo=github)](https://img.shields.io/static/v1.svg?label=CSL&message=software%20against%20climate%20change&color=green?style=flat&logo=github)


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

- **Hugo**: >0.135.0
- **Make**: >3.8

To start, run `make` or `make preview`. A development version of the site will generate and open at `http://localhost:1313`

## Usage

### `make` or `make preview`

The default command and the one used most often. The command removes the `public/` directory, builds assets and site with development settings, including sourcemaps and drafts, and generates a new `public/` folder. Any changes made to posts, pages, and assets will be updated automatically and update in the browser via BrowserSync.

### `make build`

Build a production version of the site in `public/`.

### `make deploy`

When development is done, running `make deploy` will rebuild the site with `make build` and sync changes using rsync.

# Licensing

All the content (files and folders in `content`) along with the HTML files and index are under the [Climate Strike License](https://github.com/climate-strike/license) (in short, my work is my contribution to free culture.) Feel free to use the HTML and CSS as you please unless you're an industry or individual working in fossil fuels. If you do use them, I would appreciate a link back to [http://github.com/hepplerj/jasonheppler.org](http://github.com/hepplerj/jasonheppler.org). 

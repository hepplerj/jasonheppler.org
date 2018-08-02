'use strict';
var gulp   = require('gulp');
var inject = require('gulp-inject');

// include paths file
var paths  = require('../paths');

// 'gulp inject:css' -- injects style.css
gulp.task('inject:css', () =>
  gulp.src('.tmp/source/_includes/loadcss.html')
    .pipe(inject(gulp.src('.tmp/assets/stylesheets/*.css'), {
      transform: function (filepath, file, i, length) {
        return filepath; // return filepath only
      },
      ignorePath: '.tmp',
      addRootSlash: false,
      addPrefix: '{{ site.url }}',
      removeTags: true
    }))
    .pipe(gulp.dest('.tmp/source/_includes'))
);

// injects index.js
gulp.task('inject:scripts', () =>
  gulp.src('.tmp/src/_includes/scripts.html')
    .pipe(inject(gulp.src('.tmp/assets/javascripts/*.js'), {
      transform: function (filepath, file, i, length) {
        return '<script async src="' + filepath + '"></script>';
      },
      ignorePath: '.tmp',
      addRootSlash: false,
      addPrefix: '{{ site.url }}',
      removeTags: true
    }))
    .pipe(gulp.dest('.tmp/src/_includes'))
);

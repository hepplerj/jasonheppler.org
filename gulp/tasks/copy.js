'use strict';
var gulp  = require('gulp');

// include paths file
var paths = require('../paths');

// 'gulp assets:copy' -- copies assets into the /prod/ to avoid
// Jekyll overwriting the whole directory
gulp.task('copy:assets', () =>
  gulp.src('.tmp/assets/**/*')
    .pipe(gulp.dest('prod/assets'))
);

// 'gulp jekyll:copy' -- copies processed Jekyll site to /prod/
gulp.task('copy:site', () =>
  gulp.src(['.tmp/prod/**/*', '.tmp/prod/**/.*'])
    .pipe(gulp.dest('prod'))
);

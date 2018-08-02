'use strict';
const del  = require('del');
const gulp = require('gulp');

// 'gulp clean:assets' -- removes temporary and built CSS/JS assets
gulp.task('clean:assets', () => {
  return del(['.tmp/**/*', '!.tmp/assets', 'prod/assets/**/*', '!prod/assets/images', '!prod/assets/images/**/*']);
});

// 'gulp clean:images' -- removes only image assets
gulp.task('clean:images', () => {
  return del(['prod/assets/images']);
});

// 'gulp clean:prod' -- removes built site but keep images
gulp.task('clean:prod', () => {
  return del(['prod/**/*', '!prod/assets', '!prod/assets/images', '!prod/assets/images/**/*'], {'dot': true});
});

// 'gulp clean:gzip' -- removes gzip files
gulp.task('clean:gzip', () => {
  return del(['prod/**/*.gz']);
});

// 'gulp clean:site' -- removes temporary source
gulp.task('clean:site', () => {
  return del(['.tmp/source']);
});
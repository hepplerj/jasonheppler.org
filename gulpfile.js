'use strict';

var gulp        = require('gulp');
var requireDir  = require('require-dir');
var tasks       = requireDir('./gulp/tasks', {recurse: true});

// include paths file
var paths       = require('./gulp/paths');

// inject CSS and JS to includes
gulp.task('inject', gulp.parallel('inject:css', 'inject:scripts'));

// copies, builds
gulp.task('build:site', gulp.series('site:tmp', 'inject', 'site', 'copy:site'));

// remove assets and rebuild
gulp.task('assets', gulp.series(
  gulp.parallel('styles', 'scripts'),
  gulp.series('images', 'images:feature', 'copy:assets')
));

// remove assets
gulp.task('clean', gulp.parallel('clean:assets', 'clean:gzip', 'clean:dist', 'clean:site'));

// same as default gulp, but no server
gulp.task('build', gulp.parallel('clean', 'assets', 'build:site', 'html', 'xml'));

// deploy to prod and submit sitemap XML
gulp.task('deploy', gulp.series('upload', 'submit:sitemap'));

// removes all assets, images, and built site
gulp.task('rebuild', gulp.series('clean', 'clean:images'));

// check Jekyll site for errors
gulp.task('check', gulp.series('site:check'));

// remove assets, create assets and inject them
// to includes or layouts, build site, serve site
gulp.task('default', gulp.series('build', 'serve'));

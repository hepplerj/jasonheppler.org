'use strict';
var argv         = require('yargs').argv;
var autoprefixer = require('autoprefixer');
var browserSync  = require('browser-sync').create();
var cheerio      = require('gulp-cheerio');
var concat       = require('gulp-concat');
var critical     = require('critical').stream;
var cssnano      = require('gulp-cssnano');
var gulp         = require('gulp');
var gzip         = require('gulp-gzip');
var newer        = require('gulp-newer');
var postcss      = require('gulp-postcss');
var rename       = require('gulp-rename');
var rev          = require('gulp-rev');
var sass         = require('gulp-sass');
var size         = require('gulp-size');
var svgstore     = require('gulp-svgstore');
var svgmin       = require('gulp-svgmin');
var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');
var when         = require('gulp-if');

// include paths file
var paths        = require('../paths');

// 'gulp scripts' -- creates a index.js file with Sourcemap from your JavaScript files
// 'gulp scripts --prod' -- creates a index.js file from your JavaScript files,
// minifies, gzips and cache busts it. Does not create a Sourcemap
gulp.task('scripts', () =>
  // NOTE: The order here is important since it's concatenated in order from
  // top to bottom, so you want vendor scripts etc on top
  gulp.src([
    // 'source/assets/javascripts/vendor/jquery/*.js',
    'source/assets/javascripts/bigfoot.min.js',
    // 'source/assets/javascripts/plugins/**/*.js',
    'source/assets/javascripts/main.js'
  ])
    .pipe(newer('.tmp/assets/javascripts/index.js', {dest: '.tmp/assets/javascripts', ext: '.js'}))
    .pipe(when(!argv.prod, sourcemaps.init()))
    .pipe(concat('index.js'))
    .pipe(size({
      showFiles: true
    }))
    .pipe(when(argv.prod, rename({suffix: '.min'})))
    .pipe(when(argv.prod, when('*.js', uglify({preserveComments: 'some'}))))
    .pipe(when(argv.prod, size({
      showFiles: true
    })))
    .pipe(when(argv.prod, rev()))
    .pipe(when(!argv.prod, sourcemaps.write('.')))
    .pipe(when(argv.prod, gulp.dest('.tmp/assets/javascripts')))
    .pipe(when(argv.prod, when('*.js', gzip({append: true}))))
    .pipe(when(argv.prod, size({
      gzip: true,
      showFiles: true
    })))
    .pipe(gulp.dest('.tmp/assets/javascripts'))
);

// 'gulp styles' -- creates a CSS file from SCSS, adds prefixes and creates a Sourcemap
// 'gulp styles --prod' -- creates a CSS file from your SCSS, adds prefixes, minifies,
// gzips and cache busts it. Does not create a Sourcemap
gulp.task('styles', () =>
  gulp.src(['source/assets/stylesheets/style.scss'])
    .pipe(when(!argv.prod, sourcemaps.init()))
    .pipe(sass({
      precision: 10
    }).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({browsers: ['last 2 versions', '> 5%', 'IE 9']})
    ]))
    .pipe(size({
      showFiles: true
    }))
    .pipe(gulp.dest('source/_includes'))
    .pipe(when(argv.prod, rename({suffix: '.min'})))
    .pipe(when(argv.prod, when('*.css', cssnano({autoprefixer: false}))))
    .pipe(when(argv.prod, size({
      showFiles: true
    })))
    .pipe(when(argv.prod, rev()))
    .pipe(when(!argv.prod, sourcemaps.write('.')))
    .pipe(when(argv.prod, gulp.dest('.tmp/assets/stylesheets')))
    .pipe(when(argv.prod, when('*.css', gzip({append: true}))))
    .pipe(when(argv.prod, size({
      gzip: true,
      showFiles: true
    })))
    .pipe(gulp.dest('.tmp/assets/stylesheets'))
    .pipe(when(!argv.prod, browserSync.stream()))
);

// var pageDimensions = [{
//                         width: 320,
//                         height: 480
//                       }, {
//                         width: 768,
//                         height: 1024
//                       }, {
//                         width: 1280,
//                         height: 960
//                       }];

// function to properly reload your browser
function reload(done) {
  browserSync.reload();
  done();
}

// 'gulp serve' -- open site in browser and watch for changes
// in source files and update them when needed
gulp.task('serve', (done) => {
  browserSync.init({
    // tunnel: true,
    // open: false,
    port: 4000, // change port to match default Jekyll
    ui: {
      port: 4001
    },
    server: [paths.tempFolderName, paths.siteFolderName]
  });
  done();

  // watch various files for changes and do the needful
  gulp.watch([paths.mdFilesGlob, paths.htmlFilesGlob, paths.ymlFilesGlob], gulp.series('build:site', reload));
  gulp.watch([paths.xmlFilesGlob, paths.txtFilesGlob], gulp.series('site', reload));
  // gulp.watch(paths.jsFilesGlob, gulp.series('scripts', reload));
  gulp.watch(paths.sassFilesGlob, gulp.series('styles', reload));
  gulp.watch(paths.imageFilesGlob, gulp.series('images', 'images:feature', reload));
});

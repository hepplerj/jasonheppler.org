'use strict';
var paths = {};

// Folder naming
paths.assetsFolderName = 'assets';
paths.includesFolderName = '_includes';
paths.imageFolderName = 'images';
paths.layoutsFoldername = '_layouts';
paths.scriptFolderName = 'javascripts';
paths.siteFolderName = 'prod';
paths.sourceFolderName = 'source';
paths.stylesFolderName = 'stylesheets';
paths.tempFolderName = '.tmp';

paths.prodUrl = 'https://jasonheppler.org';

// Directory locations
paths.sourceDir = paths.sourceFolderName + '/';
paths.assetsDir = paths.assetsFolderName + '/';
paths.tempDir = paths.tempFolderName + '/';
paths.siteDir = paths.siteFolderName + '/';

// Source asset files
paths.sassFiles = paths.sourceDir + paths.assetsDir + paths.stylesFolderName;
paths.jsFiles = paths.sourceDir + paths.assetsDir + paths.scriptFolderName;
paths.imageFiles = paths.sourceDir + paths.assetsDir + paths.imageFolderName;

// Temp asset files
paths.assetFilesTemp     = paths.tempDir + paths.assetsFolderName
paths.sassFilesTemp      = paths.tempDir + paths.assetsDir + paths.stylesFolderName;
paths.jsFilesTemp        = paths.tempDir + paths.assetsDir + paths.scriptFolderName;
paths.imageFilesTemp     = paths.tempDir + paths.assetsDir + paths.imageFolderName;

// Site asset files
paths.assetFilesSite     = paths.siteDir + paths.assetsFolderName
paths.sassFilesSite      = paths.siteDir + paths.assetsDir + paths.stylesFolderName;
paths.jsFilesSite        = paths.siteDir + paths.assetsDir + paths.scriptFolderName;
paths.imageFilesSite     = paths.siteDir + paths.assetsDir + paths.imageFolderName;

// Glob patterns
paths.sassPattern        = '/**/*.scss';
paths.jsPattern          = '/**/*.js';
paths.imagePattern       = '/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)';
paths.markdownPattern    = '/**/*.+(md|MD|markdown|MARKDOWN)';
paths.htmlPattern        = '/**/*.html';
paths.txtPattern         = '/**/*.txt';
paths.xmlPattern         = '/**/*.{xml,json}';
paths.ymlPattern         = '/**/*.yml';

// File globs
paths.htmlFilesGlob      = paths.sourceFolderName + paths.htmlPattern
paths.imageFilesGlob     = paths.imageFiles + paths.imagePattern
paths.jsFilesGlob        = paths.jsFiles + paths.jsPattern
paths.mdFilesGlob        = paths.sourceFolderName + paths.markdownPattern
paths.sassFilesGlob      = paths.sassFiles + paths.sassPattern
paths.txtFilesGlob       = paths.sourceFolderName + paths.txtPattern
paths.xmlFilesGlob       = paths.sourceFolderName + paths.xmlPattern
paths.ymlFilesGlob       = paths.sourceFolderName + paths.ymlPattern

module.exports = paths;

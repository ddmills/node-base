'use strict';

require('../config');

var
    gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    minify = require('gulp-minify-css'),
    merge  = require('merge-stream'),
    paths  = require('./gulp-paths')
;

gulp.task('css', ['clean'], function() {
    var sassStream = gulp
        .src(paths.sass)
        .pipe(sass().on('error', sass.logError));

    var cssStream = gulp
        .src(paths.css);

    var combined = merge(sassStream, cssStream);

    return combined
        .pipe(gulpif(process.env.ENV == 'production', minify({compatibility: 'ie8'})))
        .pipe(concat('public/css/app.css'))
        .pipe(gulp.dest(paths.dist));
});

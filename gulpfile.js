'use strict';

require('dotenv').config();

var
    gulp   = require('gulp'),
    clean  = require('gulp-clean'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify')
;

var paths = {
    ejs  : ['public/**/*.ejs'],
    sass : ['public/**/*.scss'],
    css  : ['public/**/*.css'],
    dist : ['build/']
};

/*
 * Delete the contents of the build directory
 */
gulp.task('clean', function() {
    return gulp
        .src(paths.dist, {read: false})
        .pipe(clean());
});


gulp.task('css', function() {
    gulp
        .src(paths.sass)
        // .pipe(concat('all'));
});

gulp.task('default', ['clean', 'css'], function() {
    gulp
        .src(paths.ejs)
        .pipe(gulp.dest(paths.dist));
});

'use strict';

require('dotenv').config();

var
    gulp   = require('gulp'),
    clean  = require('gulp-clean'),
    sass   = require('gulp-sass'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    minify = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    merge  = require('merge-stream')
;

var paths = {
    ejs  : ['resources/**/*.ejs'],
    sass : ['resources/**/*.scss'],
    css  : ['resources/**/*.css'],
    dist : process.env.BUILD_DIR
};

/*
 * Delete the contents of the build directory
 */
gulp.task('clean', function() {
    return gulp
        .src(paths.dist, {read: false})
        .pipe(clean());
});

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

gulp.task('copy', ['clean'], function() {
    return gulp
        .src(paths.ejs)
        .pipe(gulp.dest(paths.dist));
});

gulp.task('default', ['clean', 'copy', 'css']);

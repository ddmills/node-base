'use strict';

require('../config');
require('./clean');

var
    gulp   = require('gulp'),
    paths  = require('./gulp-paths')
;

gulp.task('copy', ['clean'], function() {
    return gulp
        .src(paths.copy)
        .pipe(gulp.dest(paths.dist));
});

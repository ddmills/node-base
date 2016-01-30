var
    gulp  = require('gulp'),
    clean = require('gulp-clean'),
    paths = require('./gulp-paths')
;

/*
 * Delete the contents of the build directory
 */
gulp.task('clean', function() {
    return gulp
        .src(paths.dist, {read: false})
        .pipe(clean());
});

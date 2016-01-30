'use strict';

require('./build');

var
    gulp  = require('gulp'),
    paths = require('./gulp-paths')
;

gulp.task('watch', function() {
    gulp.watch(paths.src + '/**/*', ['build']);
});

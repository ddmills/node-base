'use strict';

var
    gulp  = require('gulp'),
    paths = require('./gulp-paths')
;

require('./clean');
require('./copy');
require('./css');

gulp.task('build', ['clean', 'copy', 'css']);

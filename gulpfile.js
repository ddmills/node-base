'use strict';

require('./config');

var
    gulp  = require('gulp'),
    paths = require('./tasks/gulp-paths')
;

require('./tasks/clean');
require('./tasks/copy');
require('./tasks/css');
require('./tasks/build');
require('./tasks/watch');

gulp.task('default', ['build']);

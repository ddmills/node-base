'use strict';

require('../config');

module.exports = {
    src  : 'source',
    sass : ['source/**/*.scss'],
    css  : ['source/**/*.css'],
    copy : ['source/**/*.js', 'source/**/*.ejs', 'config.js', '!source/public/*'],
    dist : process.env.BUILD_DIR
};

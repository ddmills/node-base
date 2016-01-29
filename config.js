require('dotenv').config({silent: true});

var env = process.env;

process.env.SERVE_PORT =
    env.OPENSHIFT_NODEJS_PORT ||
    env.SERVE_PORT ||
    8080;

env.SERVE_IP =
    env.OPENSHIFT_NODEJS_IP ||
    env.SERVE_IP ||
    '127.0.0.1';

env.BUILD_DIR =
    env.BUILD_DIR || 'dist';

env.ENV =
    env.ENV || 'production';

process.env = env;

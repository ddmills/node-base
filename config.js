require('dotenv').config();

process.env.SERVE_PORT =
    process.env.OPENSHIFT_NODEJS_PORT ||
    process.env.SERVE_PORT ||
    8080;

process.env.SERVE_IP =
    process.env.OPENSHIFT_NODEJS_IP ||
    process.env.SERVE_IP ||
    '127.0.0.1';

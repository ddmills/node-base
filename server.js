require('./config');

var
  http    = require('http'),
  express = require('express')
;

console.log(process.env.SERVE_IP, process.env.SERVE_PORT);

function handleRequest(request, response) {
  response.end(`Web server running on Node.js v${process.versions.node}.`);
}

var server = http.createServer(handleRequest);

server.listen(process.env.SERVE_PORT, process.env.SERVE_IP, function() {
  console.log(`Server listening on http://${process.env.SERVE_IP}:${process.env.SERVE_PORT}`);
});

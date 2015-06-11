'use strict';

var http = require('http');
var util = require('util');

var server = http.createServer(function(request, response) {
  var method = request.method;
  var path = request.url;
  var message =
    util.format('Method: %s, path: %s', method, path);
  console.log(message);
  response.writeHead(200, {'Content-Type': 'application/json'});
  response.write(JSON.stringify(request.headers));
  response.end();
}).listen(8888);

console.log('Starting server on port 8888');

process.on('SIGINT', function(){
  console.log('Received SIGINT, terminating...');
  server.close();
});

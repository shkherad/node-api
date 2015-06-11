'use strict';

var url = require('url');
var http = require('http');

var token = 'b8372b4e4c1defb35ae226cc959a1762';

var options =
  url.parse(process.argv[2] || 'http://headers.jsontest.com/');

options.headers = {
  'Authorization': 'Token token=' + token
};

http.get(options, function(response) {
  var body = '';
  var statusCode = response.statusCode;
  console.log('Got status: ' + statusCode);
  response.on('data', function(data){
    body += data;
  });
  response.on('end', function(){
    var parsed = JSON.parse(body);
    console.log(parsed);
  });
}).on('error', function(e) {
  console.log('Got error: ' + e.message);
});

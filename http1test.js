/**
 * @author: Jason.占友伟 zhanyouwei@meitunmama.com
 * Created on 16/3/9.
 */

var http = require('http');
var port = '8081';

http.createServer(function (request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  response.setHeader("X-Powered-By", ' 3.2.1');
  var url = request.url;
  if (url !== '/favicon.ico') {
    if (url === '/') {
      response.end('Hello! This is HTTP1.x Server!');
    } else if (url === '/http1test') {
      setTimeout(function () {
        response.end('http1.x success');
      }, 300);
    }
  }
}).listen(port);


/**
 * @author: Jason.占友伟 zhanyouwei@icloud.com
 * Created on 16/3/9.
 */
var http2 = require('http2');
var fs = require('fs');

var options = {
	key: fs.readFileSync(__dirname + '/tsl/server.pass.key'),
	cert: fs.readFileSync(__dirname + '/tsl/server.crt'),
	NPNProtocols: ['h2', 'http 1.1', 'http 1.0'],
	passphrase: '1234'
};

http2.createServer(options, function (request, response) {
	var url = request.url;
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
	response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	response.setHeader("X-Powered-By", ' 3.2.1');
	if (url === '/') {
		response.end('Hello! This is HTTP2 Server!');
	} else if (url === '/http2test') {
		setTimeout(function () {
			response.end('http2 success');
		}, 300);
	}
}).listen(8080);

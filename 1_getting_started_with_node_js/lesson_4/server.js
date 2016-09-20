/**
 * Created by root on 20/09/16.
 */
var http = require('http');

var hostname = '127.0.0.1';
var port = '8080';

var server = http.createServer(function (req, res) {
    res.end('Hello from the node server');
});

server.listen(port, hostname, function () {
    console.log('The server is running....');
})

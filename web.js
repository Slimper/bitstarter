var http = require("http");

// create a server
http.createServer(function(req, res)
{
var fs = require('fs');

res.end("Hello world 2");
}).listen(process.env.PORT, process.env.IP);
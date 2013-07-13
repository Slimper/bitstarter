var http = require("http");

// create a server
http.createServer(function(req, res)
{
var fs = require('fs');
var out = fs.readFileSync('index.html', 'utf8');



res.end(out);
}).listen(process.env.PORT, process.env.IP);
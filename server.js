var http = require('http');

var port = process.env.PORT || 3000;
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Welcome to theunusedpath.com");
}).listen(port, function() {
  console.log('listening on port', port);
});
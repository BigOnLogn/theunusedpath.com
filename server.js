var http = require('htt');

var prot = process.env.PORT || 3000;
http.createServer(function(req, res) {
  res.send(200, "Welcome to theunusedpath.com");
}).listen(port, function() {
  console.log('listening on port', port);
});
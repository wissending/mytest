// server
var http = require('http');
var app = http.createServer(function (req, res){
       res.writeHead(200, {'content-type':'text/plain'});
       res.end('hello world');
    });

// start
var server = app.listen(3000, function(){
   console.log('server listening at some linkage' + server.address().address + ':' + server.address().port);
});

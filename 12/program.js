var http = require('http');
var map = require('through2-map');

var port = Number(process.argv[2]);

var server = http.createServer((req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    if(req.method != 'POST') {
        return res.end('Error: Not a POST request!\n');
    }
    req.pipe(map( (chunk) => {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(port, 'localhost', () => {
    console.log('Listening to port ' + port);
});
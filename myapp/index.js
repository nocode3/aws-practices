const http = require('http');
const port = 9090;
const server =  http.createServer(function(request, response) {
    console.log("request[" + request.url + "] received");
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.end("<h1>Hello AWS</h1>");

} );
server.listen( port, function() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Listening on ' + bind);
});

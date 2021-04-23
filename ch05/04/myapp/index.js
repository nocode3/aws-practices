const http = require('http');
const port = 3000;
const server =  http.createServer( function( request, response ) {
    console.log( "request[" + request.url + "] received");
    response.writeHead( 200, {
        "Content-Type": "text/html"
    });
    response.end(  "Hello AWS"  );

} );
server.listen( port, function() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.debug('Listening on ' + bind);
});
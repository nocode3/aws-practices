const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const mainRouter = require('./routes/main');

const port = 8080;
const app = express();

// parsing request body (application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({extended: false}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// request router setup
app.all('*', function (req, res, next) {
    res.locals.req = req;
    res.locals.res = res;
    next();
});
app.use('/', mainRouter);

// server start up`
let server = http.createServer(app);
server.on('error', onError);
server.on('listening', onListening);
server.listen(port);

// error handler
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = ( typeof port === 'string' ) ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}
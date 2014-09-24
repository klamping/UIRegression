var open = require('open');
var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic(__dirname + '/www/'));


app.listen(8080);


// Automatically open browser on start
open('http://localhost:8080');
console.log('Server running at http://localhost:8080');
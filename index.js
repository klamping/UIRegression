var open = require('open');
var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

var fakeAuth = function(req, res, next) {
    if (req.headers['X-Auth-Token'] == 'AUTHENTICATE!') {
        next();
    } else {
              res.write('Hello\n');
      setInterval(function() {
          res.end(' World\n');
      },2000);
        // sres.end('Please authenticate')
    };
}

if (process.argv[2] == 'secure') {
    app.use(fakeAuth);
}

app.use(serveStatic(__dirname + '/www/'));
app.listen(8080);


// Automatically open browser on start
open('http://localhost:8080');
console.log('Server running at http://localhost:8080');
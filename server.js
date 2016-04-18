var express = require('express');
var app = express();
var cases = require('./data/cases');
var http = require('http');
var httpProxy = require('http-proxy');
var config = require('./config.json');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

app.use(express.static('./'));

var proxy = httpProxy.createProxyServer({
  changeOrigin: true,
  auth: config.username + ':' + config.password
});

var server = http.createServer(function (req, res) {
  proxy.web(req, res, {
    target: config.server
  })
});

console.log('Proxy listening on 8888!');
server.listen(8888)

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.get('/cases', function(req, res) {
//   var action = Math.ceil(Math.random()*10);
//   var count = Math.floor(Math.random()*10);

//   res.json(cases);
//   // if (action <= 4 && false) {
//   //   res.sendStatus(500);
//   // } else if (false && (action == 5 || action == 6)) {
//   //   setTimeout(function () {
//   //     if (action == 5) {
//   //       res.sendStatus(500);
//   //     } else {
//   //       res.json(cases.slice(count));
//   //     }
//   //   }, 3000)
//   // } else {
//   //   res.json(cases.slice(count));
//   // }
// });



// app.listen(8888, function () {
//   console.log('Example app listening on 8888!');
// });

var express = require('express');
var app = express();
var cases = require('./data/cases')

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

app.use(express.static('./'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/cases', function(req, res) {
  var action = Math.ceil(Math.random()*10);
  var count = Math.floor(Math.random()*10);
  
  if(action <= 4) {
    res.sendStatus(500);
  } else if(action == 5 || action == 6) {
    setTimeout(function () {
      if (action == 5) {
        res.sendStatus(500);
      } else {
        res.json(cases.slice(count));
      }
    }, 3000)
  } else {
    res.json(cases.slice(count));
  }
});



app.listen(8888, function () {
  console.log('Example app listening on 8888!');
});

var express = require('express');
var app = express();

var cases = [
    {
      "id": 1,
      "name": "test"
    },
    {
      "id": 2,
      "name": "test"
    },
    {
      "id": 3,
      "name": "test"
    },
    {
      "id": 4,
      "name": "test"
    },
    {
      "id": 5,
      "name": "test"
    },
    {
      "id": 6,
      "name": "test"
    },
    {
      "id": 7,
      "name": "test"
    },
    {
      "id": 8,
      "name": "test"
    }
  ];

app.use(express.static('./'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/cases', function(req, res) {
  var action = Math.ceil(Math.random()*10);
  var count = Math.floor(Math.random()*10);
  if(action == 4) {
    res.sendStatus(500);
  } else if(action == 5 || action == 6) {
    setTimeout(function () {
      if (action == 5) {
        res.sendStatus(500);
      } else {
        res.sendStatus(res.json(cases.slice(count)));
      }
    }, 3000)
  } else {
    res.json(cases.slice(count));
  }
});



app.listen(3333, function () {
  console.log('Example app listening on port 3000!');
});

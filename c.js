var express = require('express')
var app = express()
var path = require('path');

app.get('/', function (req, res) {
  var origin = req.get('Origin');
  console.log('Found origin: ' + origin);

  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.status(200).send("true")
})

app.disable('x-powered-by');
app.use(express.static('public'))

app.listen(5000)

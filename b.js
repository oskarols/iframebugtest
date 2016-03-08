var express = require('express')
var app = express()
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/b.html'))
})

app.disable('x-powered-by');
app.use(express.static('public'))

app.listen(4000)

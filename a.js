var express = require('express')
var app = express()
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/a.html'))
})

app.get('/iframe', function (req, res) {
  res.sendFile(path.join(__dirname + '/a_iframe.html'))
})

app.disable('x-powered-by');
app.use(express.static('public'))

app.listen(3000)

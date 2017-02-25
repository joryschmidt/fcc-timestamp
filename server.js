var express = require('express');
var app = express();
var path = require('path');
var logic = require('./app-logic');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/:timestamp', logic);

var port = process.env.PORT;
app.listen(port, function() {
  console.log('App listening on port ' + port);
});
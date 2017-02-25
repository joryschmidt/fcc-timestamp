var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var logic = require('./app-logic');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/:timestamp', logic);

app.listen(8080, function() {
  console.log('App listening on port 8080');
});
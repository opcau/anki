var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var util = require('util')
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', express.static('.'));

var server = app.listen(7800, function () {
  console.log("App listening at http://:7800");
});


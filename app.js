var express = require('express');
var fs = require('fs');
var cors = require('cors');
var multipart = require('connect-multiparty');
var app = express();

var courses = require('./routes/courses');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/courses', courses);
app.listen(3000);
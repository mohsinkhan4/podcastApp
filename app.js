var express = require('express');
var fs = require('fs');
var cors = require('cors');
var multipart = require('connect-multiparty');
var app = express();

/*var speakers = require('./routes/speakers');
var gallery = require('./routes/gallery');
var participants = require('./routes/participants');
var schedules = require('./routes/schedules');

var config = require('./config/config');*/

var courses = require('./routes/courses');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/*var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(multipart({
    uploadDir: config.tmpDir
}));
app.use("/images", express.static(__dirname + '/images'));

app.use('/speaker', speakers);
app.use('/gallery', gallery);
app.use('/participant', participants);
app.use('/schedule', schedules);*/
app.use('/courses', courses);
app.listen(3000);
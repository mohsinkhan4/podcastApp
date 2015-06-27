var dburl = 'localhost:27017/doxCatcher';
var collections = ['videos'];
var db = require('mongojs').connect(dburl, collections);
//var mongojs = require('mongojs');
//var db = mongojs(dburl, collections);


module.exports = db;
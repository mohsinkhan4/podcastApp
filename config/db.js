var dburl = 'localhost:27017/doxCatcher';
var collections = ['videos'];
var db = require('mongojs').connect(dburl, collections);

module.exports = db;
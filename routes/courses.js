var express = require('express');
var db = require('../config/db');
var mongodb = require('mongodb');
var fs = require('fs');

var router = express.Router();

router.get('/', function (req, res) {
    db.videos
        .find({}, {_id: 0, courseName: 1})
        .sort({'_id' : -1}, function(err, courses) {
            res.json(courses);
        });
});

router.get('/:courseId', function (req, res) {
    db.videos
        .find({courseId : req.params.courseId}, {_id: 0, courseName: 1, videos: 1})
        .sort({'_id' : -1}, function(err, videos) {
            res.json(videos);
        });
});

router.get('/:courseId/:videoId', function (req, res) {
    db.videos
        .find({ courseId : req.params.courseId }, {_id: 0, videos: 1}, function(err, resp) {
            var videos = resp[0].videos;
            for(var i in videos){
                if(req.params.videoId == videos[i].videoId){
                    console.log(videos[i].videoId);
                    res.json(videos[i].FilePath);
                    return;
                }
            }
            res.json('not found');
        });

});

module.exports = router;
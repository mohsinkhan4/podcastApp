var express = require('express');
var db = require('../config/db');
var mongodb = require('mongodb');
var fs = require('fs');

var router = express.Router();

router.get('/', function (req, res) {
	
        db.videos
            .find({}, {_id: 0, courseName: 1})
            .sort({'_id' : -1},   
                function(err, courses) {
                    console.log(courses);
                    res.json(courses);
                }
            );
});

router.get('/:courseId', function (req, res) {
        db.videos
            .find({courseId : req.params.courseId}, {_id: 0, videos: 1})
            .sort(
                {'_id' : -1},   
                function(err, courses) {
                    console.log(courses);
                    res.json(courses);
                }
            );
});

router.get('/:courseId/:videoId', function (req, res) {

        db.videos.aggregate([
            {
                "$match" : { 
                    "courseId" : req.params.courseId 
                    //"videos.videoId" : req.params.videoId
                },
            }
           /*{$unwind: "$_id"},
            {$group: {
              _id: "$_id", numberof: {$sum: 1}
            }},
            {$sort: {numberof: -1} },
            {$limit: 1}*/
        ], function (err, result) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
            res.json(result);
        });

        /*db.videos
            .find( 
                {
                    courseId : req.params.courseId,
                    videos: { $elemMatch: { videoId: req.params.videoId } } 
                }
            )
            .sort(
                {'_id' : -1},   
                function(err, courses) {
                    console.log(courses);
                    res.json(courses);
                }
            );;*/


        /*db.videos.aggregate([
            {
                "$match" : { "courseId" : req.params.courseId }
            },
            {
               "$unwind": "$videos" 
            }
        ], function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        res.json(result);
    });*/
});

module.exports = router;
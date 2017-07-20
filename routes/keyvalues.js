/**
 * Created by liu_sh on 19/7/2017.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Keyvalue = require('../models/Keyvalue');

/* GET ALL OBJECTS */
router.get('/', function(req, res, next) {
    Keyvalue.find(function (err, keyvalues) {
        if (err) return next(err);
        res.json(keyvalues);
    });
});

/* SAVE OBJECT */
router.post('/', function(req, res, next) {
    console.log(req.body);
    req.body.timestamp = parseInt(new Date().getTime() / 1000);
    Keyvalue.create(req.body, function (err, post) {
        if (err) return next(err);
        var jsonRes = {};
        jsonRes.key = post.key;
        jsonRes.value = post.value;
        console.log(post.timestamp);
        jsonRes.timestamp = post.timestamp;
        res.json(jsonRes);
    });
});

/* GET SINGLE OBJECT BY KEY */
router.get('/:key', function(req, res, next) {
     if(!req.query.timestamp){
         console.log('No timestamp');
         Keyvalue.findOne({'key': req.params.key},{'_id': 0,'value': 1},{ sort: { _id : -1 } }, function (err, post) {
             if (err) return next(err);
             res.json(post);
         });
     } else {
         console.log(req.query.timestamp);
         Keyvalue.findOne({key: req.params.key, timestamp: req.query.timestamp},{'_id': 0,'value': 1}, function (err, post) {
             if (err) return next(err);
             res.json(post);
         });
     }

});

module.exports = router;
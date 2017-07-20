/**
 * Created by liu_sh on 19/7/2017.
 */
var mongoose = require('mongoose');

var KeyvalueSchema = new mongoose.Schema({
    key: String,
    value: String,
    timestamp: Number
});

module.exports = mongoose.model('Keyvalue',KeyvalueSchema);
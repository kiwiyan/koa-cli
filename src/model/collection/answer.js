const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    id: String,
    pic: String,
    name: String,
    answer: Array
});

module.exports = mongoose.model('answer', schema);
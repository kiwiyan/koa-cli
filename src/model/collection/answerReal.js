const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let schema = new Schema({
    winxinId: String,
    weixinInfo: Schema.Types.Mixed,
    answers: Array,
    cellphone: String,
    questions: Schema.Types.Mixed,
    updated: { type: Date, default: Date.now},
    ext: Schema.Types.Mixed
});

module.exports = mongoose.model('answerReal', schema);
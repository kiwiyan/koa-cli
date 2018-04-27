
const mongoose = require('mongoose');
function connectMongoDb(dataBase) {
    // 链接mongodb数据库
    let db = mongoose.connection;
    mongoose.connect(dataBase, err => {
        if (err) {
            console.log('链接mongo fail:', err)
        } else {
            console.log('connection success');
        }
        
    });
    // mongoose.Promise = global.promise;
    db.on('error', console.log.bind(console, 'connection error~'));
}

module.exports = connectMongoDb;
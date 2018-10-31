
const mongoose = require('mongoose');

// 链接mongodb数据库
function connectMongoDb(dataBase) {
    
    let db = mongoose.connection;
    mongoose.connect(dataBase, err => {
        if (err) {
            console.log('connect mongodb fail:', err)
        } else {
            console.log('connect mongodb success');
        }
        
    });
    // mongoose.Promise = global.promise;
    db.on('error', console.log.bind(console, 'connect mongodb error~'));
}

module.exports = connectMongoDb;
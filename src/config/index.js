// 配置文件
let config = {
    development: require('./development.js'),
    test: require('./test.js'),
    production: require('./production.js')
}; 
module.exports = config[process.env.NODE_ENV || 'production'];
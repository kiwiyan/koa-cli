module.exports = {
    env: 'production',
    port: 3000,
    passOrigin: ['http://localhost:4000'], //  跨域白名单
    database: 'mongodb://username:password@address/dbname'
}
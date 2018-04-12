module.exports = {
    env: 'development',
    port: 3000,
    passOrigin: 'http://localhost:4000', //  跨域白名单
    datebase: {
        host: 'localhost', // 服务器地址
        port: 3306, // 数据库端口号
        username: 'admin', // 数据库用户名
        password: 'admin888', // 数据库密码
        database: 'development' // 数据库名称
    },
    email: {
        service: 'smtp.abcd.com', // SMTP服务提供商域名
        username: 'postmaster%40abcd.com', // 用户名/用户邮箱
        password: 'password', // 邮箱密码
        sender_address: '"XX平台" <postmaster@abcd.com>'
    }
}
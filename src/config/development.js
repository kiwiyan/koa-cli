module.exports = {
    env: 'development',
    port: 3000,
    passOrigin: ['http://localhost:4000'], //  跨域白名单
    database: '',
    email: {
        service: 'smtp.abcd.com', // SMTP服务提供商域名
        username: 'postmaster%40abcd.com', // 用户名/用户邮箱
        password: 'password', // 邮箱密码
        sender_address: '"XX平台" <postmaster@abcd.com>'
    }
}
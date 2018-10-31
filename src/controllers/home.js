const axios = require('axios');
const userService = require('../service/userService');

const Collection = require('../model');

module.exports = {
    // 首页模板渲染页面
    async homePage(ctx, next) {
        
        ctx.render('home', {
            title: '主页',
            body: 'hello koa2'
        });
    },

    async f1(ctx, next) {
        let id = 'x1';
        let userInfo = userService.getUserById(id);
        userInfo.id = 'u-' + id;
        ctx.body = userInfo;
    },
    async f2(ctx, next) {
        let id = 'x2';
        let userInfo = userService.getUserById(id);
        userInfo.name = userInfo.name + id;
        ctx.body = userInfo;
    }

}

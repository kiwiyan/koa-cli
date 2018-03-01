const axios = require('axios');
const userService = require('../service/userService');

module.exports = {
    homePage(ctx, next) {
        ctx.render('home', {
            title: '主页',
            body: 'hello koa2'
        });
    },
    // 使用async的方式处理异步数据
    // 在这里中转处理豆瓣电影排行榜数据
    async dealDoubanApi(ctx, next) {
        let url = 'https://api.douban.com/v2/movie/in_theaters';

        let data = await axios.get(url); // 使用axios处理请求
        let resData = data.data;
        resData.addKey = '尾部新添加的数据';
        ctx.body = resData;
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

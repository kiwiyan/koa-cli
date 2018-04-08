const Router = require('koa-router');

const router = new Router();

// 首页页面的响应
router.get('/', async (ctx, next) => {
    ctx.render('home', {
        title: '主页',
        body: 'hello koa2'
    });
});

// 登录页 get请求
router.get('/login', async (ctx, next) => {
    ctx.render('login');
});

// 处理登录页的post请求
router.post('/login', async (ctx, mext) => {
    let reqBody = ctx.request.body;
    console.log('Received:', reqBody)
    ctx.response.body = `提交OK,你好${reqBody['name']}！`; 
});

// 返回请求的接口数据。在此中转豆瓣的api数据来测试。
router.get('/api/douban', async (ctx, next) => {
    const axios = require('axios');
    let url = 'https://api.douban.com/v2/movie/in_theaters';

    let data = await axios.get(url); // 使用axios处理请求
    let resData = data.data;
    resData.addKey = '尾部新添加的数据';
    ctx.body = resData;
});

module.exports = router;
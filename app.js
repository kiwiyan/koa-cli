const Koa = require('koa');
const Router = require('koa-router');
const path = require('path');
const staticServer = require('koa-static');
const koaBody = require('koa-body');
const render = require('koa-art-template');
const axios = require('axios');

const app = new Koa();
const router = new Router();

// 设置模板引擎，此处引用art-template模板
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.art',
    debug: process.env.NODE_ENV !== 'production'
});

// 错误处理中间件-next相当于回调函数，先处理各个路由，一出现问题，则catch err，返回错误。注意写在所有中间件之前。
app.use(async(ctx, next) => {
    try {
        await next();
    } catch (err) {
        // console.log('中间件err:', err)
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.body = {
            error: err
        }
        ctx.app.emit('error', err, ctx); //try catch捕获的错误，不会触发error事件，需手动释放error事件让server监听。
    }
})

app.use(koaBody()); // 解析post请求键值

// 设置静态资源路径，可以在浏览器下直接访问public(默认)路径下的静态资源 如 http://localhost:3000/public/1.jpg
app.use(staticServer(path.join(__dirname)));


app.use(router.routes()).use(router.allowedMethods()); // 使用koa-router路由中间件

// 首页
router.get('/', (ctx, next) => {
    ctx.render('home', {
        title: '主页',
        body: 'hello koa'
    });
});

// 登录页 get请求
router.get('/login', (ctx, next) => {
    ctx.render('login');
});

// 处理登录页的post请求
router.post('/login', (ctx, next) => {
    let reqBody = ctx.request.body;
    console.log('Received:', reqBody)
    ctx.response.body = `提交OK,你好${reqBody['name']}！`; 
});

// 使用async的方式处理异步数据
// 在这里中转处理豆瓣电影排行榜数据
let url = 'https://api.douban.com/v2/movie/in_theaters';
router.get('/api', async(ctx, next) => {
    let data = await axios.get(url); // 使用axios处理请求
    let resData = data.data;
    resData.addKey = '尾部新添加的数据';
    ctx.response.body = resData;
});

// 错误处理
app.on('error', (err, next) => {
    console.log('event err:', err);
    ctx.response.body = err;
});

// 监听3000端口
app.listen(3000);
console.log('Koa server is listeining on port 3000...');


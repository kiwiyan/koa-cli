const Koa = require('koa');
const router = require('./routes');
const path = require('path');
const staticServer = require('koa-static'); // 静态服务器资源中间件
const koaBody = require('koa-body'); // 处理post数据中间件
const render = require('koa-art-template'); // art-template模板引擎中间件

const CONFIG = {
    port: 3000, // 监听端口
    crossOrigin: 'http://localhost:4000' // 跨域白名单
};
const cors = require('@koa/cors'); // 跨域资源共享中间件

const app = new Koa();


// 设置模板引擎，此处引用art-template模板
render(app, {
    root: path.join( __dirname, 'views'),
    extname: '.art'
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

// 设置静态资源路径，可以在浏览器下直接访问public路径下的静态资源 如 http://localhost:3000/1.jpg
app.use(staticServer(path.join(__dirname, '../public')));

app.use(cors({origin: CONFIG.crossOrigin})); // 跨域请求资源白名单，不设参数则默认资源可通过所有域
app.use(router.routes()).use(router.allowedMethods()); // 使用koa-router路由中间件


// 错误处理
app.on('error', (err, next) => {
    console.log('event err:', err);
    ctx.response.body = err;
});
// 监听3000端口

app.listen(CONFIG.port);

console.log('\x1B[32m%s\x1B[39m', `Koa server starts. Ctrl+click to open in browser : http://localhost:${CONFIG.port}/`);


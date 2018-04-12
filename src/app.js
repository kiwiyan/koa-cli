const Koa = require('koa');
const router = require('./routes/main-routes');
const path = require('path');
const staticServer = require('koa-static');
const koaBody = require('koa-body');
const render = require('koa-art-template');
const config = require('./config/test');
const cors = require('@koa/cors');

const port = 3000;
const app = new Koa();


// 设置模板引擎，此处引用art-template模板
render(app, {
    root: path.join( __dirname, 'views'),
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

// 设置静态资源路径，可以在浏览器下直接访问public路径下的静态资源 如 http://localhost:3000/1.jpg
app.use(staticServer(path.join(__dirname, '../public')));


app.use(cors({origin: config.passOrigin})); // 跨域请求资源白名单，不设参数则默认资源可通过所有域
app.use(router.routes()).use(router.allowedMethods()); // 使用koa-router路由中间件


// 错误处理
app.on('error', (err, next) => {
    console.log('event err:', err);
    ctx.response.body = err;
});
// 监听3000端口

app.listen(config.port || port);
console.log('\x1B[32m%s\x1B[39m', `Koa server start. Ctrl+click to open in browser : http://localhost:${port}/`);


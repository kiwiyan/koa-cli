# koa-cli
基于koa2的创建restful风格api的脚手架。
配置了路由，静态资源，跨域，模板引擎等基本常用设置，并且做了服务，路由，控制器，模板等的模板处理，可快速搭建服务。

## use
```
git clone https://github.com/kiwiyan/koa-cli.git
npm install
npm start
```
## 目录结构
- app.js是入口文件，主要是server的创建，以及常用中间件的引用和配置。
- src/routes 是路由文件，用于处理get post等请求。
- src/views是模板文件。在此次使用art-template模板引擎。
- src/controllers是控制器，用于路由响应出的业务事件
- src/service用于事件的复用
- public是静态资源文件夹，里边的文件不用设置路由可直接访问。

const axios = require('axios');
const userService = require('../service/userService');

const Collection = require('../model');

module.exports = {
    async homePage(ctx, next) {
        // 增 
        // save(); create(); insertMany()
        // let answer = new  Collection.Answer({
        //     id: 'wx9528',
        //     pic: 'xx/t2.png',
        //     name: 'rose',
        //     answer: [1,1,3,2,3]
        // });
        // answer.save((err, doc) => {
        //     if (err) {
        //         console.log('保存失败')
        //     } else {
        //         console.log('save ok: ', doc)
        //     }
        // })

        // 查
        // find()找出列表-数组；findById() 通过id找；findOne找出列表第一个-文档对象，第一个参数conditions为查询条件，第二个参数doc为需要修改的数据，第三个参数options为控制选项，第四个参数是回调函数
    //     safe (boolean)： 默认为true。安全模式。
    // 　　upsert (boolean)： 默认为false。如果不存在则创建新记录。
    // 　　multi (boolean)： 默认为false。是否更新多个查询记录。
    // 　　runValidators： 如果值为true，执行Validation验证。
    // 　　setDefaultsOnInsert： 如果upsert选项为true，在新建时插入文档定义的默认值。
    // 　　strict (boolean)： 以strict模式进行更新。
    // 　　overwrite (boolean)： 默认为false。禁用update-only模式，允许覆盖记录。
        let data = await Collection.Answer.findOne({name: 'rose'});
        ctx.body = data;

        // 改
        // update(conditions, doc, [options], [callback])；
        // updateOne()-只能更新找到的第一条数据，即使设置{multi:true}也无法同时更新多个文档
        // find()/findOne()/findById() + save()；操作比较复杂的话可以用这种方法
        // let kiwiData = await Collection.Answer.findOne({name: 'kiwi2333'});
        // kiwiData.name += '3';
        // kiwiData.save((err, doc) => {
        //     if (err) throw err;
        //     console.log('save doc', doc)
        //     ctx.response.body = doc;
        // })

        //删
        
        // ctx.render('home', {
        //     title: '主页',
        //     body: 'hello koa2'
        // });
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

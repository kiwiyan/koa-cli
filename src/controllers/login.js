module.exports = {
    async loginPage(ctx, next) {
        ctx.render('login');
    },
    async loginPost(ctx, mext) {
        let reqBody = ctx.request.body;
        console.log('Received:', reqBody)
        ctx.body = `提交OK,你好${reqBody['name']}！`; 
    }
}
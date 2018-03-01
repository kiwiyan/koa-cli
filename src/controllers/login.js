module.exports = {
    loginPage(ctx, next) {
        ctx.render('login');
    },
    loginPost(ctx, mext) {
        let reqBody = ctx.request.body;
        console.log('Received:', reqBody)
        ctx.response.body = `提交OK,你好${reqBody['name']}！`; 
    }
}
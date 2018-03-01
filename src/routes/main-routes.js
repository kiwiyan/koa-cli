const Router = require('koa-router');
const home = require('../controllers/home');
const login = require('../controllers/login');

const router = new Router();
// 首页
router.get('/', home.homePage);

// 登录页 get请求
router.get('/login', login.loginPage);

// 处理登录页的post请求
router.post('/login', login.loginPost);


router.get('/api', home.dealDoubanApi);

module.exports = router;
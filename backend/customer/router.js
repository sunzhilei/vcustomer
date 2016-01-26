let express = require('express');
let router = express.Router();

// 该路由使用的中间件
//router.use(function timeLog(req, res, next) {
//    console.log('Customer Page: ', Date.now());
//    next();
//});

// 定义网站主页的路由
router.get('/', function (req, res) {
    res.render('./customer/index');
});
router.get('/CustomerList', function (req, res) {
    res.render('./customer/customerList');
});

module.exports = router;
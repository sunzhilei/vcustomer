var express = require('express');
var router = express.Router();

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Agent Page: ', Date.now());
    next();
});

// 定义网站主页的路由
router.get('/', function (req, res) {
    res.render('./agent/index');
});

module.exports = router;

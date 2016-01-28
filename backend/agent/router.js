let express = require('express');
let router = express.Router();
var bodyParser = require("body-parser");

//该路由使用的中间件
router.use(bodyParser.urlencoded({extended: false}));

// 定义网站主页的路由
router.get('/', function (req, res) {
    res.render('./agent/index');
});

// 定义网站登录的路由
router.get('/login', function (req, res) {
    res.render('./agent/login');
});
// 定义网站登录验证的路由
router.post('/login/valid', function (req, res) {
    console.log(req.body.inputEmail);
    console.log(req.body.inputPassword);

    if(true){
        res.json({result: true, redirect: "/admin"});
    }else{
        res.json({result: false, message: "帐号或密码输入有误，请重新输入！"});
    }
    //res.redirect('/');
});

// 定义网站注册的路由
router.get('/reg', function (req, res) {
    res.render('./agent/reg');
});
// 定义网站注册验证的路由
router.post('/reg/valid', function (req, res) {
    console.log(req.body.inputEmail);
    console.log(req.body.inputPassword);

    if(true){
        res.json({result: true, redirect: "/admin"});
    }else{
        res.json({result: false, message: "未知错误！请联系管理员！"});
    }
    //res.redirect('/');
});

// 定义网站后台管理的路由
router.get('/admin', function (req, res) {
    res.render('./agent/admin');
});

module.exports = router;

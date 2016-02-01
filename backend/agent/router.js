let express = require('express');
let router = express.Router();
let account = require('./service/account.js');
let resUtil = require("./../util/resUtil.js");

var bodyParser = require("body-parser");
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
    let accountName = req.body.inputEmail;
    let accountPassword = req.body.inputPassword;

    account.queryAccount(accountName, accountPassword).then(function (accountObj) {
        console.log("route:"+accountObj);
        if (accountObj) {
            let accountObjAccountName = null;
            let accountObjPassword = null;
            accountObjAccountName = accountObj.account;
            accountObjPassword = accountObj.password;
            if (accountPassword != accountObjPassword) {
                resUtil.resultFail( "密码错误！",req, res);
            }else{
                resUtil.resultSuccess(req, res);
            }
        } else {
            resUtil.resultFail("用户不存在！",req, res);
        }
    }, function (error) {
        console.error('route错误', error);
        resUtil.resultFail("系统异常，稍后重试！",req, res);
    })
});

// 定义网站注册的路由
router.get('/reg', function (req, res) {
    res.render('./agent/reg');
});
// 定义网站注册验证的路由
router.post('/reg/valid', function (req, res) {
    console.log(req.body.inputEmail);
    console.log(req.body.inputPassword);

    if (true) {
        res.json({result: true, redirect: "/admin"});
    } else {
        res.json({result: false, message: "未知错误！请联系管理员！"});
    }
    //res.redirect('/');
});

// 定义网站后台管理的路由
router.get('/admin', function (req, res) {
    res.render('./agent/admin');
});

module.exports = router;

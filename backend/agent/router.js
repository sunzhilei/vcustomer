let express = require('express');
let router = express.Router();
let account = require('./service/account.js');
let resUtil = require("./../util/resUtil.js");

var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: false}));

// 定义网站主页的路由
router.get('/', (req, res) => {
    res.render('./agent/index');
});

// 定义网站登录的路由
router.get('/login', (req, res) => {
    res.render('./agent/login');
});
// 定义网站登录验证的路由
router.post('/login/valid', (req, res) => {
    account.queryAccount(req.body.inputEmail, req.body.inputPassword).then(accountObj => {
        if (accountObj) {
            if (req.body.inputPassword != accountObj.password) {
                resUtil.resultFail("密码错误！", req, res);
            } else {
                resUtil.resultSuccess("/admin", req, res);
            }
        } else {
            resUtil.resultFail("帐号或密码不正确！", req, res);
        }
    }, e => {
        console.error(e);
        resUtil.resultFail("系统异常，稍后重试！", req, res);
    })
});

// 定义网站注册的路由
router.get('/reg', (req, res) => {
    res.render('./agent/reg');
});
// 定义网站注册验证的路由
router.post('/reg/valid', (req, res) => {
    account.insertAccount(req.body.inputEmail, req.body.inputPassword).then(rows => {
        resUtil.resultSuccess("/login", req, res);
    }, e => {
        console.error(e);
        resUtil.resultFail("系统异常，稍后重试！", req, res);
    })
});

// 定义网站后台管理的路由
router.get('/admin', (req, res) => {
    res.render('./agent/admin');
});

module.exports = router;

let express = require('express');
let router = express.Router();
let account = require('./service/account.js');
let customer = require('../customer/service/customer.js');
let resUtil = require("./../util/resUtil.js");

var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: false}));

/**
 * 跳转到网站首页
 */
router.get('/', (req, res) => {
    res.render('./agent/index');
});

/**
 * 跳转到登录页面
 */
router.get('/login', (req, res) => {
    res.render('./agent/login');
});

/**
 * 验证登录信息
 * 验证成功存入session并跳转客户后台管理
 * 验证失败则抛出错误明细
 */
router.post('/login/valid', (req, res) => {
    account.queryAccount(req.body.inputEmail, req.body.inputPassword).then(accountObj => {
        if (accountObj) {
            let account = {
                uuid: accountObj.uuid,
                account: accountObj.account,
                password: accountObj.password
            }
            req.session.account = account;
            resUtil.resultSuccess({url: "/admin"}, req, res);
        } else {
            resUtil.resultFail("帐号或密码不正确！", req, res);
        }
    }, e => {
        console.error(e);
        resUtil.resultFail("系统异常，稍后重试！", req, res);
    })
});

/**
 * 跳转到注册页面
 */
router.get('/reg', (req, res) => {
    res.render('./agent/reg');
});

/**
 * 验证注册信息
 * 验证成功跳转到登录页面
 * 验证失败则抛出错误明细
 */
router.post('/reg/valid', (req, res) => {
    account.insertAccount(req.body.inputEmail, req.body.inputPassword).then(rows => {
        resUtil.resultSuccess({url: "/login"}, req, res);
    }, e => {
        console.error(e);
        resUtil.resultFail("系统异常，稍后重试！", req, res);
    })
});

/**
 * 跳转到客户后台管理
 */
router.get('/admin', (req, res) => {
    if(req.session.account){
        res.render('./agent/admin');
    }else{
        res.render('./agent/login');
    }
});

/**
 * 获取当前客户信息
 */
router.get('/admin/personalCenter/customerInfo', (req, res) => {
    customer.queryCustomerByAccountUUID(req.session.account.uuid).then(row => {
        resUtil.resultSuccess({row: row}, req, res);
    }, e => {
        console.error(e);
        resUtil.resultFail("系统异常，稍后重试！", req, res);
    })
});

module.exports = router;

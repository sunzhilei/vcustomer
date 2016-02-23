let express = require('express');
let router = express.Router();
let shop = require('./service/customer.js');
let resUtil = require("./../util/resUtil.js");

var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: false}));

/**
 * 跳转到系统后台管理首页
 */
router.get('/', (req, res) => {
    res.render('./customer/index');
});

/**
 * 查询客户列表
 */
router.get('/list', (req, res) => {
    shop.queryCustomerList(req.query.page, req.query.number).then(objList => {
        shop.queryCustomerOfTotal().then(total => {
            resUtil.resultData(total, objList, req, res);
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        })
    }, e => {
        console.error(e);
        resUtil.resultFail("系统异常，稍后重试！", req, res);
    })
});

/**
 * 添加一个客户
 */
router.get('/addCustomer', (req, res) => {
    console.log(req.query);
    shop.queryCustomerList(req.query.page, req.query.number).then(objList => {
        shop.queryCustomerOfTotal().then(total => {
            resUtil.resultData(total, objList, req, res);
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        })
    }, e => {
        console.error(e);
        resUtil.resultFail("系统异常，稍后重试！", req, res);
    })
});

module.exports = router;
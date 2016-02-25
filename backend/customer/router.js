let express = require('express');
let router = express.Router();
let customer = require('./service/customer.js');
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
    customer.queryCustomerList(req.query.page, req.query.number).then(objList => {
        customer.queryCustomerOfTotal().then(total => {
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
router.post('/addCustomer', (req, res) => {
    if (req.body.uuid) {
        customer.updateCustomer(req.body.uuid, req.body).then(objList => {
            resUtil.resultSuccess({}, req, res);
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        })
    } else {
        customer.insertCustomer(req.session.account.uuid, req.body).then(objList => {
            resUtil.resultSuccess({}, req, res);
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        })
    }
});

module.exports = router;
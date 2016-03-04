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
 * 分页查询客户信息列表
 */
router.get('/list', (req, res) => {
    if (req.query.page && req.query.number) {
        customer.queryCustomerListByPagination(req.query.page, req.query.number).then(rows => {
            customer.queryCustomerOfTotal().then(total => {
                resUtil.resultData(total, rows, req, res);
            }, e => {
                console.error(e);
                resUtil.resultFail("系统异常，稍后重试！", req, res);
            })
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        })
    } else {
        customer.queryCustomerList().then(rows => {
            resUtil.resultData(0, rows, req, res);
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        })
    }
});

module.exports = router;
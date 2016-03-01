let express = require('express');
let router = express.Router();
let account = require('./service/account.js');
let customer = require('../customer/service/customer.js');
let category = require('./service/category.js');
let item = require('./service/item.js');
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
    account.queryAccount(req.body).then(accountObj => {
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
 * 退出登录处理
 */
router.get('/loginOut', (req, res) => {
    req.session.destroy();
    res.render('./agent/index');
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
    account.insertAccount(req.body).then(result => {
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
    if (req.session.account) {
        res.render('./agent/admin');
    } else {
        res.render('./agent/login');
    }
});

/**
 * 获取一个客户信息
 */
router.get('/admin/getCustomer', (req, res) => {
    customer.queryCustomerByAccountUUID(req.session.account.uuid).then(row => {
        resUtil.resultSuccess({row: row}, req, res);
    }, e => {
        console.error(e);
        resUtil.resultFail("系统异常，稍后重试！", req, res);
    })
});

/**
 * 添加一个客户信息
 */
router.post('/admin/addCustomer', (req, res) => {
    if (req.body.uuid) {
        customer.updateCustomer(req.session.account.uuid, req.body).then(result => {
            resUtil.resultSuccess({}, req, res);
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        })
    } else {
        customer.insertCustomer(req.session.account.uuid, req.body).then(result => {
            resUtil.resultSuccess({}, req, res);
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        })
    }
});

/**
 * 获取当前用户的品类列表
 */
router.get('/admin/getCategoryList', (req, res) => {
    category.queryCategoryListByAccountUUID(req.session.account.uuid, req.query.page, req.query.number).then(rows => {
        category.queryCategoryOfTotal(req.session.account.uuid).then(total => {
            resUtil.resultData(total, rows, req, res);
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
 * 获取指定的品类信息
 */
router.get('/admin/getCategory', (req, res) => {
    category.queryCategoryByUUID(req.body).then(row => {
        resUtil.resultSuccess({row: row}, req, res);
    }, e => {
        console.error(e);
        resUtil.resultFail("系统异常，稍后重试！", req, res);
    })
});

/**
 * 添加一个客户信息
 */
router.post('/admin/addCategory', (req, res) => {
    if (req.body.uuid) {
        category.updateCategory(req.body).then(result => {
            resUtil.resultSuccess({}, req, res);
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        })
    } else {
        category.insertCategory(req.session.account.uuid, req.body).then(result => {
            resUtil.resultSuccess({}, req, res);
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        })
    }
});

/**
 * 获取指定品类下的项目
 */
router.get('/admin/getItemList/:categroy_uuid', (req, res) => {
    item.queryItemListByCategoryUUID(req.params.categroy_uuid, req.query.page, req.query.number).then(rows => {
        item.queryItemOfTotal(req.body).then(total => {
            resUtil.resultData(total, rows, req, res);
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
 * 获取指定的项目信息
 */
router.get('/admin/getItem', (req, res) => {
    category.queryItemByUUID(req.body).then(row => {
        resUtil.resultSuccess({row: row}, req, res);
    }, e => {
        console.error(e);
        resUtil.resultFail("系统异常，稍后重试！", req, res);
    })
});

/**
 * 添加一个项目信息
 */
router.post('/admin/addItem', (req, res) => {
    if (req.body.uuid) {
        item.updateItem(req.body).then(result => {
            resUtil.resultSuccess({}, req, res);
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        })
    } else {
        item.insertItem(req.body).then(result => {
            resUtil.resultSuccess({}, req, res);
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        })
    }
});

module.exports = router;

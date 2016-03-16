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
        if (accountObj.uuid) {
            let account = {
                uuid: accountObj.uuid,
                account: accountObj.account,
                password: accountObj.password
            }
            req.session.account = account;
            res.redirect('/admin');
        } else {
            res.redirect('/login');
        }
    }, e => {
        console.error(e);
        res.redirect('/login');
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
        res.redirect('/login');
    }, e => {
        console.error(e);
        res.redirect('/reg');
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
 * 获取当前用户的商品列表
 */
router.get('/admin/getCategoryList', (req, res) => {
    if (req.query.page && req.query.number) {
        category.queryCategoryListByAccountUUIDForPagination(req.session.account.uuid, req.query.page, req.query.number).then(rows => {
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
    } else {
        category.queryCategoryListByAccountUUID(req.session.account.uuid).then(rows => {
            resUtil.resultData(0, rows, req, res);
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        })
    }
});

/**
 * 获取指定的商品分类
 */
router.get('/admin/getCategory/:uuid', (req, res) => {
    category.queryCategoryByUUID(req.params.uuid).then(row => {
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
 * 删除指定的商品分类
 */
router.post('/admin/delCategory/:uuid', (req, res) => {
    category.delCategoryByUUID(req.params.uuid).then(result => {
        resUtil.resultSuccess({}, req, res);
    }, e => {
        console.error(e);
        resUtil.resultFail("系统异常，稍后重试！", req, res);
    })
});

/**
 * 获取指定商品下的商品
 */
router.get('/admin/getItemList', (req, res) => {
    if (req.query.page && req.query.number) {
        item.queryItemListForPagination(req.session.account.uuid, req.query.page, req.query.number).then(rows => {
            item.queryItemListByAccountUUIDOfTotal(req.session.account.uuid).then(total => {
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
        item.queryItemList(req.session.account.uuid).then(rows => {
            resUtil.resultData(0, rows, req, res);
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        })
    }
});

/**
 * 终端客户获取指定商品下的商品
 */
router.get('/admin/getItemList/:account_uuid', (req, res) => {
    if (req.query.page && req.query.number) {
        item.queryItemListForPagination(req.params.account_uuid, req.query.page, req.query.number).then(rows => {
            item.queryItemListByAccountUUIDOfTotal(req.session.account.uuid).then(total => {
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
        item.queryItemList(req.params.account_uuid).then(rows => {
            resUtil.resultData(0, rows, req, res);
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        })
    }
});

/**
 * 获取指定商品下的商品
 */
router.get('/admin/getItemList/:categroy_uuid', (req, res) => {
    if (req.query.page && req.query.number) {
        item.queryItemListByCategoryUUIDForPagination(req.params.categroy_uuid, req.query.page, req.query.number).then(rows => {
            item.queryItemListByCategoryUUIDOfTotal(req.body).then(total => {
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
        item.queryItemListByCategoryUUID(req.params.categroy_uuid).then(rows => {
            resUtil.resultData(0, rows, req, res);
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        })
    }
});

/**
 * 获取指定的商品信息
 */
router.get('/admin/getItem/:uuid', (req, res) => {
    item.queryItemByUUID(req.params.uuid).then(row => {
        resUtil.resultSuccess({row: row}, req, res);
    }, e => {
        console.error(e);
        resUtil.resultFail("系统异常，稍后重试！", req, res);
    })
});

/**
 * 添加一个商品信息
 */
router.post('/admin/addItem', (req, res) => {
    if (req.body.uuid) {
        item.updateItem(req.session.account.uuid, req.body).then(result => {
            resUtil.resultSuccess({}, req, res);
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        })
    } else {
        item.insertItem(req.session.account.uuid, req.body).then(result => {
            resUtil.resultSuccess({}, req, res);
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        })
    }
});

/**
 * 删除指定的商品信息
 */
router.post('/admin/delItem/:uuid', (req, res) => {
    item.delItemByUUID(req.params.uuid).then(result => {
        resUtil.resultSuccess({}, req, res);
    }, e => {
        console.error(e);
        resUtil.resultFail("系统异常，稍后重试！", req, res);
    })
});

module.exports = router;

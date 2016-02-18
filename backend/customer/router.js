let express = require('express');
let router = express.Router();
let shop = require('./service/shop.js');
let resUtil = require("./../util/resUtil.js");

var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: false}));

// 定义网站主页的路由
router.get('/', function (req, res) {
    res.render('./customer/index');
});
router.get('/list', function (req, res) {
    shop.queryShopByAccountUUID(req.query.page, req.query.number).then(function (objList) {
        let shopList = new Array();
        if(objList){
            for (let i = 0; i < objList.length; i++) {
                let obj = objList[i];
                shopList[i] = {
                    uuid: obj.uuid,
                    account_uuid: obj.account_uuid,
                    shop_name: obj.shop_name,
                    operator_name: obj.operator_name,
                    operator_phone: obj.operator_phone,
                    wx_appid: obj.wx_appid,
                    wx_accesstoken: obj.wx_accesstoken,
                    wx_secret: obj.wx_secret,
                    wx_url: obj.wx_url,
                    wx_token: obj.wx_token
                }
            }
        }
        resUtil.resultData(shopList,shopList.length,req,res)
    },function (error) {
        console.error('route错误', error);
        resUtil.resultFail("系统异常，稍后重试！",req, res);
    })
});

module.exports = router;
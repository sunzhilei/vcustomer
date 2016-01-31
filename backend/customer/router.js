let express = require('express');
let router = express.Router();
let shop = require('./service/shop.js');

var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: false}));

// 定义网站主页的路由
router.get('/', function (req, res) {
    res.render('./customer/index');
});
router.get('/list', function (req, res) {
    let bodyString = JSON.stringify({
        "result": true
    })

    shop.queryShopByAccountUUID(function (err, objList) {

        let shopList = new Array();
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

        bodyString = JSON.stringify({
            total: 10,
            rows: shopList
        })

        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Trailer': 'Content-MD5'
        });
        res.write(bodyString);
        res.end();
    })
});

module.exports = router;
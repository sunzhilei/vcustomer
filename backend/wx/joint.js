/**
 * Created by sunzhilei on 2016/1/23.
 */
let express = require('express');
let url = require('url');
let crypto = require('crypto');

let customer = require('../customer/service/customer.js');

let router = express.Router();

// 该路由使用的中间件
router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

// 定义网站主页的路由
router.get('/valid/:account_uuid', (req, res) => {
    customer.queryCustomerByUUID(req.params.account_uuid).then(row => {
        valid(row.wx_token, req, res);
    }, e => {
        console.error(e);
        resUtil.resultFail("系统异常，稍后重试！", req, res);
    })
});

function valid(wx_token, req, res) {
    let query = url.parse(req.url, true).query;

    let signature = query.signature;
    let echostr = query.echostr;
    let timestamp = query['timestamp'];
    let nonce = query.nonce;

    let oriArray = new Array();
    oriArray[0] = nonce;
    oriArray[1] = timestamp;
    oriArray[2] = wx_token;
    oriArray.sort();
    let original = oriArray.join('');
    let scyptoString = sha1(original);

    if (signature == scyptoString) {
        res.end(echostr);
        console.log("验证成功并返回了echostr！");
    } else {
        res.end("false");
        console.log("验证失败!");
    }
}

//sha1加密方法
function sha1(str) {
    let md5sum = crypto.createHash("sha1");
    md5sum.update(str);
    str = md5sum.digest("hex");
    return str;
}

module.exports = router;

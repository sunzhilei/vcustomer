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
    console.log("================" + req.params.account_uuid);
    customer.queryCustomerByUUID(req.params.account_uuid).then(row => {
        valid(row.wx_token);
    }, e => {
        console.error(e);
        resUtil.resultFail("系统异常，稍后重试！", req, res);
    })
});

function valid(wx_token) {
    console.log("================" + wx_token);
    let query = url.parse(req.url, true).query;

    console.log("query================" + query);
    let signature = query.signature;
    console.log("signature================" + signature);
    let echostr = query.echostr;
    console.log("echostr================" + scyptoString);
    let timestamp = query['timestamp'];
    console.log("timestamp================" + timestamp);
    let nonce = query.nonce;
    console.log("nonce================" + nonce);

    let oriArray = new Array();
    oriArray[0] = nonce;
    oriArray[1] = timestamp;
    oriArray[2] = wx_token;
    oriArray.sort();
    let original = oriArray.join('');
    console.log("original================" + original);
    let scyptoString = sha1(original);

    console.log("================" + scyptoString);

    if (signature == scyptoString) {
        console.log("================" + "success");
        res.end(echostr);
        console.log("验证成功并返回了echostr！");
    } else {
        console.log("================" + "failed");
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

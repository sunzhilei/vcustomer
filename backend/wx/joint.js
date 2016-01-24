/**
 * Created by sunzhilei on 2016/1/23.
 */
let express = require('express');
let url = require('url');
let crypto = require('crypto');

let router = express.Router();

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// 定义网站主页的路由
router.get('/valid', function (req, res) {
    let query = url.parse(req.url, true).query;

    let signature = query.signature;
    let echostr = query.echostr;
    let timestamp = query['timestamp'];
    let nonce = query.nonce;

    let oriArray = new Array();
    oriArray[0] = nonce;
    oriArray[1] = timestamp;
    oriArray[2] = "sunzhl";
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
});

//sha1加密方法
function sha1(str) {
    let md5sum = crypto.createHash("sha1");
    md5sum.update(str);
    str = md5sum.digest("hex");
    return str;
}

module.exports = router;

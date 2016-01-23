var express = require('express');
var router = express.Router();

var url = require("url");

var crypto = require('crypto');

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// 定义网站主页的路由
router.get('/valid', function (req, res) {
    var query = url.parse(req.url, true).query;

    var signature = query.signature;
    var echostr = query.echostr;
    var timestamp = query['timestamp'];
    var nonce = query.nonce;

    var oriArray = new Array();
    oriArray[0] = nonce;
    oriArray[1] = timestamp;
    oriArray[2] = "sunzhl";
    oriArray.sort();
    var original = oriArray.join('');
    var scyptoString = sha1(original);

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
    var md5sum = crypto.createHash("sha1");
    md5sum.update(str);
    str = md5sum.digest("hex");
    return str;
}

module.exports = router;

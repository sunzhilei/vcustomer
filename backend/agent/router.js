let express = require('express');
let router = express.Router();
let account = require('./service/account.js');

var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: false}));


// 定义网站主页的路由
router.get('/', function (req, res) {
    res.render('./agent/index');
});

// 定义网站登录的路由
router.get('/login', function (req, res) {
    res.render('./agent/login');
});
// 定义网站登录验证的路由
router.post('/login/valid', function (req, res) {
    let bodyString = JSON.stringify({
        "result": true
    })

    account.queryAccount(req.body.inputEmail, req.body.inputPassword, function (err, obj) {
        if (req.body.inputPassword != obj.password) {
            bodyString = JSON.stringify({
                "result": false,
                "msg": "密码错误！"
            })
        }
    })

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Trailer': 'Content-MD5'
    });
    res.write(bodyString);
    res.end();

    //res.redirect('/');
});

// 定义网站注册的路由
router.get('/reg', function (req, res) {
    res.render('./agent/reg');
});
// 定义网站注册验证的路由
router.post('/reg/valid', function (req, res) {
    console.log(req.body.inputEmail);
    console.log(req.body.inputPassword);

    if (true) {
        res.json({result: true, redirect: "/admin"});
    } else {
        res.json({result: false, message: "未知错误！请联系管理员！"});
    }
    //res.redirect('/');
});

// 定义网站后台管理的路由
router.get('/admin', function (req, res) {
    res.render('./agent/admin');
});

module.exports = router;

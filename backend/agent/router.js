let express = require('express');
let router = express.Router();

// 该路由使用的中间件
//router.use(function timeLog(req, res, next) {
//    console.log('Agent Page: ', Date.now());
//    next();
//});

// 定义网站主页的路由
router.get('/', function (req, res) {
    res.render('./agent/index');
});

// 定义网站登录的路由
router.get('/login', function (req, res) {
    res.render('./agent/login');
});

// 定义网站登录的路由
router.post('/login/valid', function (req, res) {
    let body = {
        "result": true
    }
    let bodyString = JSON.stringify(body);

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Trailer': 'Content-MD5'
    });
    res.write(bodyString);
    res.end();
    //res.redirect('/');
});

module.exports = router;

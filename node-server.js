var express = require('express');
var app = express();

// 前端资源静态化
app.use('/frontend', express.static('./frontend'));

// 安装html视图引擎
var engines = require('consolidate');
app.set('views','./frontend');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

// 注册代理网站路由器
var agent_router = require('./backend/agent/router');
app.use('/', agent_router);

// 注册客户网站路由器
var customer_router = require('./backend/customer/router');
app.use('/SysEntry', customer_router);


 //与微信公众号对接的URL和TOKEN
var joint = require('./backend/wx/joint');
app.use('/joint', joint);

 //启动定时任务，每小时的55分获取一次access_token并保存在access_token.json文件中
//获取access_token通过getAccessToken模块从access_token.json中取出
var accessToken = require('./backend/wx/access_token/reqAccessToken');
accessToken.then(function(data) {
    console.log(data.access_token);
}, function(error) {
    console.error('错误', error);
});

//启动对5050端口的监听
app.listen(process.env.PORT || 5050);

console.log("Node.js服务已启动，端口号为5050");

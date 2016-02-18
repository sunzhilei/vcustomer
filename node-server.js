'use strict';
let express = require('express');
let app = express();

// 安装html视图引擎
let engines = require('consolidate');
app.set('views', './frontend');
app.engine('html', engines.mustache);
app.set('view engine', 'html');
// 前端资源静态化
app.use('/frontend', express.static('./frontend'));

// 注册Session中间件
//app.use(express.session());

//与微信公众号对接的URL和TOKEN
let joint = require('./backend/wx/joint');
app.use('/joint', joint);

// 注册代理商平台路由器
let agent_router = require('./backend/agent/router');
app.use('/', agent_router);

// 注册客户管理平台路由器
let customer_router = require('./backend/customer/router');
app.use('/customer', customer_router);

// 启动定时任务，每小时获取一次access_token并保存
let updateAccessTokenscheduleJob = require('./backend/wx/access_token/updateAccessTokenscheduleJob');
updateAccessTokenscheduleJob();

// 初始化mysql
let MysqlPool = require('./backend/mysql/MysqlPool');
MysqlPool.query({
    sql: "select  1 FROM DUAL ",
    params: null
}).then(function (rows) {
    console.log("数据库连接成功：:" + rows);
}, function (error) {
    console.error('数据库连接失败', error);
});

// 启动对5050端口的监听
app.listen(process.env.PORT || 5050);
console.log("Node.js服务已启动，端口号为5050");

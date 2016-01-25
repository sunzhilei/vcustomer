'use strict';
let express = require('express');
let app = express();

// 前端资源静态化
app.use('/frontend', express.static('./frontend'));

// 安装html视图引擎
let engines = require('consolidate');
app.set('views','./frontend');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

// 连接数据库，开启连接池
let enabledMysqlConnection = require('./backend/mysql/enabledMysqlConnection');
enabledMysqlConnection();

// 注册代理网站路由器
let agent_router = require('./backend/agent/router');
app.use('/', agent_router);

// 注册客户网站路由器
let customer_router = require('./backend/customer/router');
app.use('/SysEntry', customer_router);


 //与微信公众号对接的URL和TOKEN
let joint = require('./backend/wx/joint');
app.use('/joint', joint);

 //启动定时任务，每小时的55分获取一次access_token并保存在access_token.json文件中
//获取access_token通过getAccessToken模块从access_token.json中取出
let updateAccessTokenscheduleJob = require('./backend/wx/access_token/updateAccessTokenscheduleJob');
updateAccessTokenscheduleJob();

//启动对5050端口的监听
app.listen(process.env.PORT || 5050);

console.log("Node.js服务已启动，端口号为5050");

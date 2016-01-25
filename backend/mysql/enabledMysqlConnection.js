let mysql   = require('mysql');

// 定义网站主页的路由
let enabledMysqlConnection = function () {
    // 连接共享型MySQL
    var connection = mysql.createConnection({
        host     : process.env.MYSQL_HOST,
        port     : process.env.MYSQL_PORT,
        user     : process.env.ACCESSKEY,
        password : process.env.SECRETKEY,
        database : 'app_' + process.env.APPNAME
    });

    connection.query('show status', function(err, rows) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(rows);
    })

    connection.end()
};

module.exports = enabledMysqlConnection;

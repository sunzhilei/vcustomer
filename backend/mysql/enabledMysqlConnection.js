let mysql = require('mysql');

let  mysqlPool = null;

let initMysqlPool = function(){
    mysqlPool = mysql.createPool({
        /* host     : process.env.MYSQL_HOST,
         port     : process.env.MYSQL_PORT,
         user     : process.env.ACCESSKEY,
         password : process.env.SECRETKEY,
         database : 'app_' + process.env.APPNAME*/
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'source',
        port: 3306
    });
}

/**
 * 非事物
 */
exports.query = function (sqlReq, callback) {
    //sql, params
    if (!mysqlPool) {
        initMysqlPool();
    }
    mysqlPool.getConnection(function (err, connection) {
        if (err) {
            throw err;
        }
        connection.query(sqlReq.sql, sqlReq.params, function (err, rows) {
            connection.release();
            return callback(err, rows);
        });
    });
}

/**
 *事物
 */
exports.processTransaction = function (callback) {
    if (!mysqlPool) {
        initMysqlPool();
    }

    mysqlPool.getConnection(function (err, connection) {

        if (err) {
            throw err;
        }
        return callback(connection);
    });
}
module.exports = initMysqlPool;
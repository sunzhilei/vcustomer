let mysql = require('mysql');

let mysqlPool = null;

let initMysqlPool = function () {
    console.log("mysql 初始化");
    mysqlPool = mysql.createPool({
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.ACCESSKEY,
        password: process.env.SECRETKEY,
        //database : process.env.APPNAME
        database: 'app_' + process.env.APPNAME
    });
}

/**
 * 非事物
 */
exports.query = function (sqlReq) {
    return new Promise(function (resolve, reject) {
    //sql, params
    if (!mysqlPool) {
        initMysqlPool();
    }
    mysqlPool.getConnection(function (err, connection) {
        if (err) {
            reject(new Error(err));
        } else {
            connection.config.queryFormat = function (query, values) {
                if (!values) return query;
                return query.replace(/\:(\w+)/g, function (txt, key) {
                    if (values.hasOwnProperty(key)) {
                        return this.escape(values[key]);
                    }
                    return txt;
                }.bind(this));
            };

            connection.query(sqlReq.sql, sqlReq.params, function (err, rows) {
                connection.release();
                if(err){
                    reject(new Error(err));
                }else{
                    resolve(rows);
                }
            });
        }
    })
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

        connection.config.queryFormat = function (query, values) {
            if (!values) return query;
            return query.replace(/\:(\w+)/g, function (txt, key) {
                if (values.hasOwnProperty(key)) {
                    return this.escape(values[key]);
                }
                return txt;
            }.bind(this));
        };

        return callback(connection);
    });
}

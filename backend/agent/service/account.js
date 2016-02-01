let MysqlPool = require('./../../mysql/MysqlPool');

/**
 * 根据用户名查询用户信息
 */
exports.queryAccount = function (account, password) {
    return new Promise(function (resolve, reject) {
        MysqlPool.query({
            sql: "SELECT uuid,account,password from account where account=:account and password=:password",
            params: {account: account, password: password}
        }).then(function (rows) {
            console.log("service:"+rows);
            if (rows.length > 0) {
                resolve(rows[0]);
            } else {
                resolve(null);
            }
        }, function (error) {
            console.error('service错误', error);
            reject(new Error(err));
        })
    })
}

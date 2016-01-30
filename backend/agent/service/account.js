let MysqlPool = require('./../../mysql/MysqlPool');

/**
 * 根据用户名查询用户信息
 */
exports.queryAccount = function (account, password, callback) {
    MysqlPool.query({
        sql: "SELECT uuid,account,password from account where account=:account and password=:password",
        params: {account: account, password: password}
    }, function (err, rows) {
        if (err || !rows) {
            return callback(err, null);
        }
        if (rows.length > 0) {
            callback(null, rows[0]);
        } else {
            callback(null, null);
        }
    });
}

let enabledMysqlConnection = require('./../../mysql/enabledMysqlConnection');

/**
 * 根据用户名查询用户信息
 */
exports.queryByAccount = function (account,callback){
    enabledMysqlConnection.query({
        sql     : "SELECT account,password from account where account=:account",
        params  : { account : account }
    },function (err, rows) {
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

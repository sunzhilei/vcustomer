let MysqlPool = require('./../../mysql/MysqlPool');

/**
 * 根据用户名查询用户信息
 */
exports.queryShopByAccountUUID = function (callback) {
    MysqlPool.query({
        sql: "SELECT uuid,account_uuid,shop_name,operator_name,operator_phone,wx_appid,wx_secret,wx_accesstoken,wx_url,wx_token from shop",
        params: {}
    }, function (err, rows) {
        if (err || !rows) {
            return callback(err, null);
        }
        if (rows.length > 0) {
            callback(null, rows);
        } else {
            callback(null, null);
        }
    });
}

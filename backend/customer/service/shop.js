let MysqlPool = require('./../../mysql/MysqlPool');

/**
 * 根据用户名查询用户信息
 */
exports.queryShopByAccountUUID = function (page, number) {
    return new Promise(function (resolve, reject) {
        MysqlPool.query({
            sql: "SELECT uuid,account_uuid,shop_name,operator_name,operator_phone,wx_appid,wx_secret,wx_accesstoken,wx_url,wx_token from shop limit "+page+","+number,
            params:{}
        }).then(function (rows) {
            if (rows.length > 0) {
                resolve(rows);
            } else {
                resolve(null);
            }
        }, function (error) {
            console.error('service错误', error);
            reject(new Error(error));
        })
    })
}

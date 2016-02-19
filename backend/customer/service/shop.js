let MysqlPool = require('./../../mysql/MysqlPool');

/**
 * 根据用户名查询用户信息
 */
exports.queryShopByAccountUUID = (page, number) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT uuid,account_uuid,shop_name,operator_name,operator_phone,wx_appid,wx_secret,wx_accesstoken,wx_url,wx_token from shop limit " + page + "," + number,
            params: {}
        }).then(rows => {
            if (rows.length > 0) {
                resolve(rows);
            } else {
                resolve(null);
            }
        }, e => {
            console.error(e);
            reject(new Error(e));
        })
    })
}

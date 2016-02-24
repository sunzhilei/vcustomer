let MysqlPool = require('./../../mysql/MysqlPool');

/**
 * 分页查询客户列表
 */
exports.queryCustomerList = (page, number) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT * from customer limit " + page + "," + number,
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
/**
 * 查询客户总数
 */
exports.queryCustomerOfTotal = () => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT count(1) as total from customer",
            params: {}
        }).then(total => {
            if (total.length > 0) {
                resolve(total[0].total);
            } else {
                resolve(null);
            }
        }, e => {
            console.error(e);
            reject(new Error(e));
        })
    })
}
/**
 * 根据帐号的uuid查询客户信息
 */
exports.queryCustomerByAccountUUID = (uuid) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT * from customer where account_uuid = :uuid",
            params: {uuid: uuid}
        }).then(rows => {
            if (rows.length > 0) {
                resolve(rows[0]);
            } else {
                resolve(null);
            }
        }, e => {
            console.error(e);
            reject(new Error(e));
        })
    })
}
/**
 * 插入客户信息
 */
exports.insertCustomer = (account, password) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "insert into customer(uuid,account_uuid,mp_name,mp_type,operator_name,operator_phone,wx_appid,wx_secret,wx_url,wx_token,wx_accesstoken) VALUES(:uuid,:account_uuid,:mp_name,:mp_type,:operator_name,:operator_phone,:wx_appid,:wx_secret,:wx_url,:wx_token,:wx_accesstoken)",
            params: {
                uuid: uuid.createUUID(),
                account_uuid: account_uuid,
                mp_name: mp_name,
                mp_type: mp_type,
                operator_name: operator_name,
                operator_phone: operator_phone,
                wx_appid: wx_appid,
                wx_secret: wx_secret,
                wx_url: wx_url,
                wx_token: wx_token,
                wx_accesstoken: wx_accesstoken
            }
        }).then(rows => {
            if (rows.length > 0) {
                resolve(rows[0]);
            } else {
                resolve(null);
            }
        }, e => {
            console.error(e);
            reject(new Error(error));
        })
    })
}
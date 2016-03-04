let MysqlPool = require('./../../mysql/MysqlPool');
let uuid = require("./../../util/UUID.js");

/**
 * 查询所有客户列表
 */
exports.queryCustomerList = () => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT * from customer",
            params: {}
        }).then(rows => {
            if (rows.length > 0) {
                resolve(rows);
            } else {
                resolve([]);
            }
        }, e => {
            console.error(e);
            reject(new Error(e));
        })
    })
}
/**
 * 分页查询客户列表
 */
exports.queryCustomerListByPagination = (page, number) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT * from customer limit :page,:number",
            params: {page: parseInt(page) - 1, number: parseInt(number)}
        }).then(rows => {
            if (rows.length > 0) {
                resolve(rows);
            } else {
                resolve([]);
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
        }).then(rows => {
            if (rows.length > 0) {
                resolve(rows[0].total);
            } else {
                resolve([]);
            }
        }, e => {
            console.error(e);
            reject(new Error(e));
        })
    })
}
/**
 * 查询所有客户信息
 */
exports.queryCustomerOfAll = () => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT * from customer",
            params: {}
        }).then(total => {
            if (total.length > 0) {
                resolve(total[0].total);
            } else {
                resolve([]);
            }
        }, e => {
            console.error(e);
            reject(new Error(e));
        })
    })
}
/**
 * 根据uuid查询客户信息
 */
exports.queryCustomerByUUID = (account_uuid) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT * from customer where account_uuid = :account_uuid",
            params: {account_uuid: account_uuid}
        }).then(rows => {
            if (rows.length > 0) {
                resolve(rows[0]);
            } else {
                resolve([]);
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
exports.queryCustomerByAccountUUID = (account_uuid) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT * from customer where account_uuid = :account_uuid",
            params: {account_uuid: account_uuid}
        }).then(rows => {
            if (rows.length > 0) {
                resolve(rows[0]);
            } else {
                resolve([]);
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
exports.insertCustomer = (account_uuid, body) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "insert into customer(uuid,account_uuid,mp_name,mp_type,operator_name,operator_phone,wx_appid,wx_secret,wx_url,wx_token,wx_accesstoken) VALUES(:uuid,:account_uuid,:mp_name,:mp_type,:operator_name,:operator_phone,:wx_appid,:wx_secret,:wx_url,:wx_token,:wx_accesstoken)",
            params: {
                uuid: uuid.createUUID(),
                account_uuid: account_uuid,
                mp_name: body.mp_name,
                mp_type: body.mp_type,
                operator_name: body.operator_name,
                operator_phone: body.operator_phone,
                wx_appid: body.wx_appid,
                wx_secret: body.wx_secret,
                wx_url: 'http://vcustomer.applinzi.com/joint/valid/' + account_uuid,
                wx_token: account_uuid,
                wx_accesstoken: ''
            }
        }).then(result => {
            if (result.length > 0) {
                resolve(result);
            } else {
                resolve(null);
            }
        }, e => {
            console.log(e);
            reject(new Error(error));
        })
    })
}
/**
 * 更新客户信息
 */
exports.updateCustomer = (account_uuid, body) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "update customer set mp_name = :mp_name, mp_type = :mp_type, operator_name = :operator_name, operator_phone = :operator_phone, wx_appid = :wx_appid, wx_secret = :wx_secret, wx_url = :wx_url, wx_token = :wx_token where uuid = :uuid",
            params: {
                uuid: body.uuid,
                mp_name: body.mp_name,
                mp_type: body.mp_type,
                operator_name: body.operator_name,
                operator_phone: body.operator_phone,
                wx_appid: body.wx_appid,
                wx_secret: body.wx_secret,
                wx_url: 'http://vcustomer.applinzi.com/joint/valid/' + account_uuid,
                wx_token: account_uuid,
            }
        }).then(result => {
            if (result.length > 0) {
                resolve(result);
            } else {
                resolve(null);
            }
        }, e => {
            console.log(e);
            reject(new Error(error));
        })
    })
}

/**
 * 更新客户信息微信访问令牌
 */
exports.updateCustomerAccessToken = (uuid, wx_accesstoken) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "update customer set wx_accesstoken = :wx_accesstoken where uuid = :uuid",
            params: {
                uuid: uuid,
                wx_accesstoken: wx_accesstoken
            }
        }).then(result => {
            if (result.length > 0) {
                resolve(result);
            } else {
                resolve(null);
            }
        }, e => {
            console.log(e);
            reject(new Error(error));
        })
    })
}

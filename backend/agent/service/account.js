let MysqlPool = require('./../../mysql/MysqlPool');
let uuid = require("./../../util/UUID.js");

/**
 * 根据用户名查询用户信息
 */
exports.queryAccount = (body) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT uuid,account,password from account where account=:account and password=:password",
            params: {account: body.account, password: body.password}
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
 * 插入登录用户信息
 */
exports.insertAccount = (body) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "insert into account(uuid,account,password) VALUES(:uuid,:account,:password)",
            params: {uuid: uuid.createUUID(), account: body.account, password: body.password}
        }).then(result => {
            if (result.length > 0) {
                resolve(result);
            } else {
                resolve(null);
            }
        }, e => {
            console.error(e);
            reject(new Error(error));
        })
    })
}

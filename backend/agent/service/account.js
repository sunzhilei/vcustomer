let MysqlPool = require('./../../mysql/MysqlPool');
let uuid = require("./../../util/UUID.js");

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
            reject(new Error(error));
        })
    })
}
/**
 * 插入登录用户信息
 */
exports.insertAccount = function (account, password) {
    return new Promise(function (resolve, reject) {
        MysqlPool.query({
            sql: "insert into account(uuid,account,password) VALUES(:uuid,:account,:password)",
            params: {uuid:uuid.createUUID(),account: account, password: password}
        }).then(function (rows) {
            console.log("service:"+rows);
        }, function (error) {
            console.error('service错误', error);
            reject(new Error(error));
        })
    })
}

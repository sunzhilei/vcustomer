let MysqlPool = require('./../../mysql/MysqlPool');
let uuid = require("./../../util/UUID.js");

/**
 * 根据用户名查询用户信息
 */
exports.queryMediaListByAccountUUID = (account_uuid) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT uuid,account_uuid,name,path from media where account_uuid=:account_uuid",
            params: {account_uuid: account_uuid}
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
 * 根据UUID查询素材信息
 */
exports.queryMediaByUUID = (uuid) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT uuid,account_uuid,name,path from media where uuid=:uuid",
            params: {uuid: uuid}
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
 * 根据用户名查询用户信息
 */
exports.DelMediaByUUID = (account_uuid, uuid) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "delete from media where account_uuid=:account_uuid and uuid = :uuid",
            params: {account_uuid: account_uuid, uuid: uuid}
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
 * 为指定用户记录素材位置
 */
exports.insertMedia = (account_uuid, name, path) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "insert into media(uuid,account_uuid,name,path) VALUES(:uuid,:account_uuid,:name,:path)",
            params: {
                uuid: uuid.createUUID(),
                account_uuid: account_uuid,
                name: name,
                path: path
            }
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
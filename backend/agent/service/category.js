let MysqlPool = require('./../../mysql/MysqlPool');
let uuid = require("./../../util/UUID.js");

/**
 * 根据当前登录用户查询所有品类列表
 */
exports.queryCategoryListByAccountUUID = (account_uuid) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT uuid,account_uuid,name from category where account_uuid = :account_uuid",
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
 * 根据当前登录用户分页查询品类列表
 */
exports.queryCategoryListByAccountUUIDForPagination = (account_uuid, page, number) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT uuid,account_uuid,name from category where account_uuid = :account_uuid limit :page,:number",
            params: {account_uuid: account_uuid, page: parseInt(page) - 1, number: parseInt(number)}
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
 * 查询当前用户的品类总数
 */
exports.queryCategoryOfTotal = (account_uuid) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT count(1) as total from category where account_uuid = :account_uuid",
            params: {account_uuid: account_uuid}
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
 * 根据UUID查询品类信息
 */
exports.queryCategoryByUUID = (body) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT uuid,account_uuid,name from category where uuid = :uuid",
            params: {uuid: body.uuid}
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
 * 为指定用户插入品类信息
 */
exports.insertCategory = (account_uuid, body) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "insert into category(uuid,account_uuid,name) VALUES(:uuid,:account_uuid,:name)",
            params: {
                uuid: uuid.createUUID(),
                account_uuid: account_uuid,
                name: body.name
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

/**
 * 为指定用户插入品类信息
 */
exports.updateCategory = (body) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "update category set name = :name where uuid = :uuid",
            params: {
                uuid: body.uuid,
                name: body.name
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

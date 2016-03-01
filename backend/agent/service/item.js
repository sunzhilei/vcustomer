let MysqlPool = require('./../../mysql/MysqlPool');
let uuid = require("./../../util/UUID.js");

/**
 * 根据品类ID查询项目列表
 */
exports.queryItemListByCategoryUUID = (category_uuid, page, number) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT uuid,category_uuid,name,price,pic,descript from item where category_uuid = '" + category_uuid + "' limit " + parseInt(page) + "," + parseInt(number),
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
 * 查询指定品类的项目总数
 */
exports.queryitemOfTotal = (category_uuid) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT count(1) as total from item where category_uuid = '" + category_uuid + "'",
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
 * 根据UUID查询品类信息
 */
exports.queryItemByUUID = (body) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT uuid,category_uuid,name,price,pic,descript from item where uuid = :uuid",
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
 * 为指定品类插入项目信息
 */
exports.insertItem = (body) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "insert into item(uuid,category_uuid,name,price,pic,descript) VALUES(:uuid,:category_uuid,:name,:price,:pic,:descript)",
            params: {
                uuid: uuid.createUUID(),
                category_uuid: body.category_uuid,
                name: body.name,
                price: body.price,
                pic: body.pic,
                descript: body.descript
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
 * 修改项目信息
 */
exports.updateItem = (body) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "update item set category_uuid = :category_uuid, name = :name, price = :price, pic = :pic, descript = :descript where uuid = :uuid",
            params: {
                uuid: body.uuid,
                category_uuid: body.category_uuid,
                name: body.name,
                price: body.price,
                pic: body.pic,
                descript: body.descript
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
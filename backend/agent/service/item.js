let MysqlPool = require('./../../mysql/MysqlPool');
let uuid = require("./../../util/UUID.js");

/**
 * 查询当前用户所有商品信息
 */
exports.queryItemList = (account_uuid, line) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT item.uuid,item.account_uuid,item.category_uuid,category.name as category_name,item.title,item.sub_title,item.price,item.pic_uuid,item.pic_path,item.descript,item.line from item,category where item.category_uuid = category.uuid and item.account_uuid = :account_uuid and item.line = " + line,
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
 * 查询指定品类的商品总数
 */
exports.queryItemListByAccountUUIDOfTotal = (account_uuid, line) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT count(1) as total from item where account_uuid = '" + account_uuid + "' and line = 1",
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
 * 根据品类ID查询商品列表
 */
exports.queryItemListByCategoryUUID = (category_uuid, line) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT item.uuid,item.account_uuid,item.category_uuid,category.name as category_name,item.title,item.sub_title,item.price,item.pic_uuid,item.pic_path,item.descript,item.line from item,category where item.category_uuid = category.uuid and item.category_uuid = :category_uuid and item.line = :line",
            params: {
                category_uuid: category_uuid,
                line:parseInt(line)
            }
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
 * 根据品类ID查询商品列表 - 分页
 */
exports.queryItemListByCategoryUUIDForPagination = (category_uuid, line, page, number) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT item.uuid,item.account_uuid,item.category_uuid,category.name as category_name,item.title,item.sub_title,item.price,item.pic_uuid,item.pic_path,item.descript,item.line from item,category where item.category_uuid = category.uuid and item.category_uuid = :category_uuid and item.line = :line limit :page,:number",
            params: {
                category_uuid: category_uuid,
                line: parseInt(line),
                page: parseInt(page) - 1,
                number: parseInt(number)
            }
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
 * 查询指定品类的商品总数
 */
exports.queryItemListByCategoryUUIDOfTotal = (category_uuid, line) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT count(1) as total from item where category_uuid = :category_uuid and line = :line",
            params: {
                category_uuid: category_uuid,
                line: parseInt(line),
            }
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
exports.queryItemByUUID = (uuid) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "SELECT uuid,account_uuid,category_uuid,title,sub_title,price,pic_uuid,pic_path,descript,line from item where uuid = :uuid",
            params: {uuid: uuid}
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
 * 为指定品类插入商品信息
 */
exports.insertItem = (account_uuid, body) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "insert into item(uuid,account_uuid,category_uuid,title,sub_title,price,pic_uuid,pic_path,descript,line) VALUES(:uuid,:account_uuid,:category_uuid,:title,:sub_title,:price,:pic_uuid,:pic_path,:descript,line)",
            params: {
                uuid: uuid.createUUID(),
                account_uuid: account_uuid,
                category_uuid: body.category_uuid,
                title: body.title,
                sub_title: body.sub_title,
                price: body.price,
                pic_uuid: body.pic_uuid,
                pic_path: body.pic_path,
                descript: body.descript,
                line: parseInt(body.line)
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
 * 修改商品信息
 */
exports.updateItem = (account_uuid, body) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "update item set account_uuid = :account_uuid, category_uuid = :category_uuid, title = :title, sub_title = :sub_title, price = :price, pic_uuid = :pic_uuid, pic_path = :pic_path, descript = :descript, line = :line where uuid = :uuid",
            params: {
                uuid: body.uuid,
                account_uuid: account_uuid,
                category_uuid: body.category_uuid,
                title: body.title,
                sub_title: body.sub_title,
                price: body.price,
                pic_uuid: body.pic_uuid,
                pic_path: body.pic_path,
                descript: body.descript,
                line: parseInt(body.line)
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
 * 为指定用户删除商品信息
 */
exports.delItemByUUID = (uuid) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "delete from item where uuid = :uuid",
            params: {
                uuid: uuid
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
 * 为指定用户下架商品信息
 */
exports.updateOffLineForItemByUUID = (uuid) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "update item set line = 0 where uuid = :uuid",
            params: {
                uuid: uuid
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
 * 为指定用户上架商品信息
 */
exports.updateOnLineForItemByUUID = (uuid) => {
    return new Promise((resolve, reject) => {
        MysqlPool.query({
            sql: "update item set line = 1 where uuid = :uuid",
            params: {
                uuid: uuid
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
/**
 * Created by tjg on 2016/2/1.
 */
let uuid = require('node-uuid');
exports.createUUID = () => {
    return uuid.v4();
}

/**
 * Created by tjg on 2016/2/1.
 */
let uuid = require('node-uuid');
exports.createUUID = () => {
    var regS = new RegExp("\\-", "g");
    return uuid.v4().replace(regS, "");
}

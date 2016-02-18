/**
 * Created by tjg on 2016/2/1.
 */
let uuid = require('node-uuid');
exports.createUUID=function(){
    let  newuuid = uuid.v4();
    console.log(newuuid);
    return newuuid;
}

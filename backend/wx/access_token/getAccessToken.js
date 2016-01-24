/**
 * Created by sunzhilei on 2016/1/3.
 */

var fs = require('fs');

var getAccessToken = new Promise(function (resolve, reject) {

    fs.readFile('./access_token/access_token.json', 'utf-8', function (err, d) {
        if (err) {
            reject(new Error(err));
        } else {
            d = eval('(' + d.toString() + ')');
            resolve(d.access_token);
        }
    });

});

module.exports = getAccessToken;
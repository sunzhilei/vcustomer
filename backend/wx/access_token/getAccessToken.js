/**
 * Created by sunzhilei on 2016/1/3.
 */

let fs = require('fs');

let getAccessToken = new Promise((resolve, reject) => {
    fs.readFile('./backend/wx/access_token/access_token.json', 'utf-8', (err, d) => {
    //fs.readFile('./access_token/access_token.json', 'utf-8', (err, d) => {
        if (err) {
            reject(new Error(err));
        } else {
            d = eval('(' + d.toString() + ')');
            resolve(d.access_token);
        }
    });
});

module.exports = getAccessToken;
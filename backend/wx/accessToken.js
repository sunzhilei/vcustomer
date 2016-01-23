/**
 * Created by sunzhilei on 2016/1/3.
 */

let https = require('https');

let accessToken = new Promise(function(resolve, reject){
    let options = {
        hostname: 'api.weixin.qq.com',
        port: 443,
        path: '/cgi-bin/token?grant_type=client_credential&appid=wxb05bb562f6415aa6&secret=48e84b1eab2a7746623d896fd7b41e20',
        method: 'GET'
    };

    let req = https.request(options, function (res) {
        if (res.statusCode === 200) {
            res.on('data', function (d) {
                d = eval('(' + d.toString() + ')')
                resolve(d);
            })
        } else {
            req.on('error', function (e) {
                reject(
                    new Error(e)
                );
            });
        }
    });
    req.end();

});

module.exports = accessToken;
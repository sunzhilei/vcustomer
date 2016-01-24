/**
 * Created by sunzhilei on 2016/1/3.
 */

let https = require('https');
let fs = require('fs');
let schedule = require('node-schedule');

let reqAccessToken = function () {
    return new Promise(function (resolve, reject) {
        let options = {
            hostname: 'api.weixin.qq.com',
            port: 443,
            path: '/cgi-bin/token?grant_type=client_credential&appid=wxb05bb562f6415aa6&secret=48e84b1eab2a7746623d896fd7b41e20',
            method: 'GET'
        };
        let req = https.request(options, function (res) {
            if (res.statusCode === 200) {
                res.on('data', function (d) {
                    resolve(setAccessToken(d));
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
}


let setAccessToken = function (d) {
    return new Promise(function (resolve, reject) {
        fs.writeFile('./backend/wx/access_token/access_token.json', d, 'utf-8', function (err) {
            if (err) {
                reject(new Error(err));
            } else {
                resolve("set access_token successful");
            }
        });
    });
}

let updateAccessTokenscheduleJob = function () {
    let rule = new schedule.RecurrenceRule();
    rule.minute = 27;
    schedule.scheduleJob(rule, function () {
        reqAccessToken().then(function (msg) {
            console.log(msg.toString())
        }, function (error) {
            console.error('错误', error);
        });
    });
}

module.exports = updateAccessTokenscheduleJob;
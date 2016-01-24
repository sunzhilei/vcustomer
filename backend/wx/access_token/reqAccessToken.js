/**
 * Created by sunzhilei on 2016/1/3.
 */

var https = require('https');
var fs = require('fs');
var schedule = require("node-schedule");

var reqAccessToken = function () {
    return new Promise(function (resolve, reject) {
        var options = {
            hostname: 'api.weixin.qq.com',
            port: 443,
            path: '/cgi-bin/token?grant_type=client_credential&appid=wxb05bb562f6415aa6&secret=48e84b1eab2a7746623d896fd7b41e20',
            method: 'GET'
        };
        var req = https.request(options, function (res) {
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


var setAccessToken = function (d) {
    return new Promise(function (resolve, reject) {
        fs.writeFile('access_token.json', d, 'utf-8', function (err) {
            if (err) {
                reject(new Error(e));
            } else {
                resolve("set access_token successful");
            }
        });
    });
}

var rule = new schedule.RecurrenceRule();
rule.minute = 18;
var j = schedule.scheduleJob(rule, function () {
    reqAccessToken().then(function (msg) {
        console.log(msg.toString())
    }, function (error) {
        console.error('错误', error);
    });
});

module.exports = reqAccessToken;
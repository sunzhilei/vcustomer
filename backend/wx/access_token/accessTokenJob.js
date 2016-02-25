/**
 * Created by sunzhilei on 2016/1/3.
 */

let https = require('https');
let fs = require('fs');
let schedule = require('node-schedule');

let setAccessToken = d => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./backend/wx/access_token/access_token.json', d, 'utf-8', e => {
            if (e) {
                reject(new Error(e));
            } else {
                resolve("set access_token successful");
            }
        });
    });
}

exports.getAccessToken = new Promise((resolve, reject) => {
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

exports.reqAccessToken = (appid, secret) => {
    return new Promise((resolve, reject) => {
        let options = {
            hostname: 'api.weixin.qq.com',
            port: 443,
            //path: '/cgi-bin/token?grant_type=client_credential&appid=wxb05bb562f6415aa6&secret=48e84b1eab2a7746623d896fd7b41e20',
            path: '/cgi-bin/token?grant_type=client_credential&appid=' + appid + '&secret=' + secret,
            method: 'GET'
        };
        let req = https.request(options, res => {
            if (res.statusCode === 200) {
                res.on('data', d => {
                    resolve(setAccessToken(d));
                })
            } else {
                req.on('error', e => {
                    reject(new Error(e));
                });
            }
        });
        req.end();
    });
}

exports.updateAccessTokenscheduleJob = () => {
    let rule = new schedule.RecurrenceRule();
    rule.minute = 55;
    schedule.scheduleJob(rule, () => {
        reqAccessToken().then(msg => {
            console.log(msg.toString())
        }, e => {
            console.log(e);
        });
    });
}
/**
 * Created by sunzhilei on 2016/1/3.
 */

let https = require('https');
let fs = require('fs');
let schedule = require('node-schedule');

let customer = require('../customer/service/customer.js');

exports.getAccessToken = (appid, secret) => {
    return new Promise((resolve, reject) => {
        let options = {
            hostname: 'api.weixin.qq.com',
            port: 443,
            path: '/cgi-bin/token?grant_type=client_credential&appid=' + appid + '&secret=' + secret,
            method: 'GET'
        };
        let req = https.request(options, res => {
            if (res.statusCode === 200) {
                res.on('data', buffer => {
                    let access_token = JSON.parse(buffer.toString()).access_token;
                    resolve(access_token);
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
        customer.queryCustomerOfAll().then(rows => {
            rows.forEach(row => {
                this.getAccessToken(row.wx_appid, row.wx_secret).then(access_token => {
                    customer.updateCustomerAccessToken(row.uuid, access_token).then(result => {
                        resolve(result);
                    }, e => {
                        console.log("更新访问令牌出现异常");
                        reject(new Error(e));
                    })
                }, e => {
                    console.error("customer_uuid:" + row.uuid + "  " + e);
                });
            })
        }, e => {
            console.error(e);
            resUtil.resultFail("系统异常，稍后重试！", req, res);
        });

    });
}
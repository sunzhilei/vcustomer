/**
 * Created by sunzhilei on 2016/1/23.
 */

let https = require('https');
let accessTokenJob = require('./accessTokenJob');


exports.getNavigation = () => {
    return new Promise((resolve, reject) => {

        let body = {
            "button": [
                //{
                //    "type": "view",
                //    "name": "HOME",
                //    "url": "http://vcustomer.applinzi.com/"
                //},
                //{
                //    "type": "view",
                //    "name": "Login",
                //    "url": "http://vcustomer.applinzi.com/login"
                //},
                {
                    "type": "view",
                    "name": "Home",
                    "url": "http://vcustomer.applinzi.com/client/e296ebfd469042c9ad4f2f744dbb549q"
                }
            ]
        };

        let bodyString = JSON.stringify(body);

        console.log(bodyString);

        accessTokenJob.getAccessToken('wxb05bb562f6415aa6', '48e84b1eab2a7746623d896fd7b41e20').then((access_token) => {
            let options = {
                hostname: 'api.weixin.qq.com',
                port: 443,
                path: '/cgi-bin/menu/create?access_token=' + access_token,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': bodyString.length
                }
            };


            let req = https.request(options, res => {
                console.log('statusCode: ', res.statusCode);
                console.log('headers: ', res.headers);

                res.on('data', d => {
                    resolve(d);
                })
            });
            req.write(bodyString, 'utf-8');
            req.end();
            req.on('error', e => {
                reject(new Error(e));
            });
        }, e => {
            console.log(e.message);
        });

    });
}
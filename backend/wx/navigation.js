/**
 * Created by sunzhilei on 2016/1/23.
 */

let https = require('https');
let accessTokenJob = require('./access_token/accessTokenJob');


let getNavigation = () => {
    return new Promise((resolve, reject) => {

        let body = {
            "button": [
                {
                    "type": "view",
                    "name": "HOME",
                    "url": "http://vcustomer.applinzi.com/"
                },
                {
                    "type": "view",
                    "name": "Login",
                    "url": "http://vcustomer.applinzi.com/login"
                },
                {
                    "type": "view",
                    "name": "Manager",
                    "url": "http://vcustomer.applinzi.com/customer"
                }
            ]
        };

        let bodyString = JSON.stringify(body);

        console.log(bodyString);

        accessTokenJob.getAccessToken.then((access_token) => {
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

getNavigation().then(d => {
    console.log(d.toString());
}, e => {
    console.log(e.message);
});
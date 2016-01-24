/**
 * Created by sunzhilei on 2016/1/23.
 */

let https = require('https');
let getAccessToken = require('./access_token/getAccessToken');


let getNavigation = function () {
    return new Promise(function (resolve, reject) {

        let body = {
            "button": [
                {
                    "type": "view",
                    "name": "HOME",
                    "url": "http://vcustomer.applinzi.com/"
                },
                {
                    "type": "view",
                    "name": "Product",
                    "url": "http://vcustomer.applinzi.com/"
                },
                {
                    "type": "view",
                    "name": "Team",
                    "url": "http://vcustomer.applinzi.com/"
                }
            ]
        };

        let bodyString = JSON.stringify(body);

        console.log(bodyString);

        getAccessToken.then(function (access_token) {
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


            let req = https.request(options, (res) => {
                console.log('statusCode: ', res.statusCode);
                console.log('headers: ', res.headers);

                res.on('data', function (d) {
                    resolve(d);
                })
            });
            req.write(bodyString, 'utf-8');
            req.end();
            req.on('error', (e) => {
                reject(new Error(e));
            });
        }, function (error) {
            console.error('错误', error);
        });

    });
}

getNavigation().then(function (d) {
    console.log(d.toString());
}, function (error) {
    console.error('错误', error);
});
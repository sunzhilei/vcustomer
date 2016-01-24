/**
 * Created by sunzhilei on 2016/1/23.
 */

var https = require('https');
var querystring = require('querystring');

var getAccessToken = require('./access_token/getAccessToken');


var getNavigation = function () {
    return new Promise(function (resolve, reject) {

        var body = {
            "button": [
                {
                    "type": "view",
                    "name": "服务理念",
                    "url": "http://vcustomer.applinzi.com/"
                },
                {
                    "type": "view",
                    "name": "产品中心",
                    "url": "http://vcustomer.applinzi.com/"
                },
                {
                    "type": "view",
                    "name": "关于我们",
                    "url": "http://vcustomer.applinzi.com/"
                }
            ]
        };

        var bodyString = JSON.stringify(body);

        console.log(bodyString);

        getAccessToken.then(function (access_token) {
            var options = {
                hostname: 'api.weixin.qq.com',
                port: 443,
                path: '/cgi-bin/menu/create?access_token=' + access_token,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': bodyString.length
                }
            };


            var req = https.request(options, (res) => {
                console.log('statusCode: ', res.statusCode);
                console.log('headers: ', res.headers);

                res.on('data', function (d) {
                    resolve(d);
                })
            });
            req.write(bodyString);
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
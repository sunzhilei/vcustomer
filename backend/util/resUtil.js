/**
 * Created by tjg on 2016/1/31.
 */
let code = 200;
let expires = new Date(Date.now() + 100000000);

exports.resultSuccess = (custom,req, res) => {
    let bodyString = {
        "result": true,
        "custom": custom
    };
    res.writeHead(code, {
        'expires': expires
    });
    res.write(JSON.stringify(bodyString));
    res.end();
}
exports.resultData = (total, rows, req, res) => {
    let bodyString = {
        total: total,
        rows: rows
    };
    res.writeHead(code, {
        'expires': expires
    });
    res.write(JSON.stringify(bodyString));
    res.end();
}
exports.resultFail = (msg, req, res) => {
    let bodyString = {
        "result": false,
        "msg": msg
    };
    res.writeHead(code, {
        'expires': expires
    });
    res.write(JSON.stringify(bodyString));
    res.end();
}

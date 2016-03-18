/**
 * Created by tjg on 2016/1/31.
 */

exports.resultSuccess = (custom,req, res) => {
    let bodyString = {
        "result": true,
        "custom": custom
    };
    res.write(JSON.stringify(bodyString));
    res.end();
}
exports.resultData = (total, rows, req, res) => {
    let bodyString = {
        total: total,
        rows: rows
    };
    res.write(JSON.stringify(bodyString));
    res.end();
}
exports.resultFail = (msg, req, res) => {
    let bodyString = {
        "result": false,
        "msg": msg
    };
    res.write(JSON.stringify(bodyString));
    res.end();
}

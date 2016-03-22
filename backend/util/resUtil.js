/**
 * Created by tjg on 2016/1/31.
 */

exports.resultSuccess = (custom, req, res) => {
    res.write(JSON.stringify({
        "result": true,
        "custom": custom
    }));
    res.end();
}
exports.resultData = (total, rows, req, res) => {
    res.write(JSON.stringify({
        total: total,
        rows: rows
    }));
    res.end();
}
exports.resultFail = (msg, req, res) => {
    res.write(JSON.stringify({
        "result": false,
        "msg": msg
    }));
    res.end();
}

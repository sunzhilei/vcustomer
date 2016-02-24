/**
 * Created by tjg on 2016/1/31.
 */
let resCode = 200;
let Content_Type = "text/plain";
let Trailer = "Content-MD5";

exports.resultSuccess = (custom,req, res) => {
    let bodyString = {
        "result": true,
        "custom": custom
    };
    res.writeHead(resCode, {
        'Content-Type': Content_Type,
        'Trailer': Trailer
    });
    res.write(JSON.stringify(bodyString));
    res.end();
}
exports.resultData = (total, rows, req, res) => {
    let bodyString = {
        total: total,
        rows: rows
    };
    res.writeHead(resCode, {
        'Content-Type': Content_Type,
        'Trailer': Trailer
    });
    res.write(JSON.stringify(bodyString));
    res.end();
}
exports.resultFail = (msg, req, res) => {
    let bodyString = {
        "result": false,
        "msg": msg
    };
    res.writeHead(resCode, {
        'Content-Type': Content_Type,
        'Trailer': Trailer
    });
    res.write(JSON.stringify(bodyString));
    res.end();
}
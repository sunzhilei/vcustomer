/**
 * Created by tjg on 2016/1/31.
 */
let resCode = 200;
let Content_Type = "text/plain";
let Trailer = "Content-MD5";

exports.resultSuccess = function(req, res){
    let  bodyString =  {
        "result": true
    };
    res.writeHead(resCode, {
        'Content-Type':Content_Type,
        'Trailer': Trailer
    });
    res.write(JSON.stringify(bodyString));
    res.end();
}
exports.resultFail = function(msg,req, res){
    let  bodyString =  {
        "result": false,
        "msg":msg
    };
    res.writeHead(resCode, {
        'Content-Type':Content_Type,
        'Trailer': Trailer
    });
    res.write(JSON.stringify(bodyString));
    res.end();
}

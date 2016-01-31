/**
 * Created by sunzhilei on 2016/1/22.
 */

exports.get = function (_url) {
    return request(_url, '', 'GET');
}
exports.get = function (_url, _data) {
    return request(_url, _data, 'GET');
}
exports.post = function (_url) {
    return request(_url, '', 'POST');
}
exports.post = function (_url, _data) {
    return request(_url, _data, 'POST');
}
let request = function (_url, _data, _method) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: _url,
            data: _data,
            method: _method,
            dataType: 'json',
            async: true,
            cache: true,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            success: function (data, textStatus, jqXHR) {
                resolve(data)
            },
            error: function (jqXHR, textStatus, errorThrown) {
                reject(errorThrown)

            }
        });
    });
}
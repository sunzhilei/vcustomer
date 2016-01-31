/**
 * Created by sunzhilei on 2016/1/22.
 */

exports.get = _url => {
    return request(_url, '', 'GET');
}
exports.get = (_url, _data) => {
    return request(_url, _data, 'GET');
}
exports.post = _url => {
    return request(_url, '', 'POST');
}
exports.post = (_url, _data) => {
    return request(_url, _data, 'POST');
}
let request = (_url, _data, _method) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: _url,
            data: _data,
            method: _method,
            dataType: 'json',
            async: true,
            cache: true,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            success: (data, textStatus, jqXHR) => {
                resolve(data)
            },
            error: (jqXHR, textStatus, errorThrown) => {
                reject(errorThrown)

            }
        });
    });
}
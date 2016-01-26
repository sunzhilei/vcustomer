/**
 * Created by sunzhilei on 2016/1/22.
 */

let Ajax = function (_url, _data) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: _url,
            method: 'POST',
            data: _data,
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

module.exports = Ajax;
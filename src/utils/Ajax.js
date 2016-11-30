'use strict';
/**
 * 用于数据传输时使用
 * @param obj
 * @returns {string}
 */
function toQueryString(obj) {
    return obj ? Object.keys(obj).sort().map(function (key) {
        var val = obj[key];
        if (Array.isArray(val)) {
            return val.sort().map(function (val2) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
            }).join('&');
        }
        return encodeURIComponent(key) + '=' + encodeURIComponent(val);
    }).join('&') : '';
}

var Ajax = {
    post: function (url, params, callback) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: toQueryString(params)
        })
            .then(res => res.json())
        .then(res => {
            callback(res);
    }
        ).done();
    },


}
export default Ajax;
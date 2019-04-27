/**
 * 获取地址栏参数值
 * @param key 地址栏参数名称
 * @returns {string} 地址栏值
 */
function getPageParameters(key) {
    var search = location.search.slice(1);
    var arr = search.split("&");
    for (var i = 0; i < arr.length; i++) {
        var ar = arr[i].split("=");
        //全部转换小写比对
        if (ar[0].toLocaleLowerCase() === key.toLocaleLowerCase()) {
            return decodeURI(ar[1]);
        }
    }
    return "";
}

/**
 * 克隆
 * @param  initalObj:被克隆的对象
 * @returns 克隆的对象
 */
function deepCopy(initalObj, finalObj) {
    var _clone = finalObj || {};
    for (var key in initalObj) {
        var prop = initalObj[key];
        if (prop === _clone) {
            continue;
        }
        if (typeof key === 'object') {
            _clone[key] = prop.constructor === Array ? [] : {};
            //判断是否是数组:2.Array.isArray 1.instanceof 3.Object.prototype.toString.call(value)
            //测试：console.log(Object.prototype.toString.call(c) === '[object Array]')  结果为true
            arguments.callee(prop, _clone[key]);//callee指向当前调用的函数
        } else {
            _clone[key] = prop;
        }
    }
    return _clone;
}

/**
 * 保留小数位
 * @param sValue:传入的值 sPos:保留位数
 * @returns {string}  转换后的值
 */
function formatFloat(sValue, sPos) {
    sValue = parseFloat(sValue);
    var v = String(Math.round(sValue * Math.pow(10, sPos)) / Math.pow(10, sPos));
    var b = v.indexOf('.');
    var n = "";
    if (b == -1) {
        for (i = 0; i < 2; i++) {
            n += "0";
        }
        return v + "." + n;
    } else {
        if (v.length - b < sPos + 1) {
            for (i = 0; i < sPos + 1 - (v.length - b); i++) {
                n += "0";
            }
            return v + n;
        }
        return (v);
    }
}

function dateFormat(raw, format) {
    if (raw == null) {
        raw = new Date();
    } else {
        raw = new Date(raw);
    }
    if (format == null) {
        format = 'yyyy-MM-dd HH:mm:ss';
    }
    var add0 = function (num) {
        return num > 9 ? num : '0' + num;
    };
    return format.replace(/[yY]{4}/, raw.getFullYear())
        .replace(/MM/, add0(raw.getMonth() + 1))
        .replace(/M/, raw.getMonth() + 1)
        .replace(/[dD]{2}/, add0(raw.getDate()))
        .replace(/[dD]{1}/, raw.getDate())
        .replace(/[hH]{2}/, add0(raw.getHours()))
        .replace(/[hH]{1}/, raw.getHours())
        .replace(/mm/, add0(raw.getMinutes()))
        .replace(/m/, raw.getMinutes())
        .replace(/[sS]{2}/, add0(raw.getSeconds()))
        .replace(/[sS]{1}/, raw.getSeconds())
}

console.log(dateFormat());
console.log(dateFormat(1459934682000));
console.log(dateFormat(1459934682000, 'yyyy-M-d hh:m'));
console.log(dateFormat('2015-12-16T08:02:51.284Z', 'YYYY/M/DD hh:mm'));

var ret = 0 ? 2 ? 4 : 5 ? 6 : 7 : 8;
console.log(ret);
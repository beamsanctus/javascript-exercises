const sumAll = function (x, y) {
    if (typeof (x) != "number" || typeof (y) != "number" || x < 0 || y < 0) {
        return 'ERROR';
    } else {
        let a = x < y ? x : y;
        let b = y > x ? y : x;
        let result = a;
        for (let i = a + 1; i <= b; i++) {
            result += i;
        }
        return result;
    }
};


sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;

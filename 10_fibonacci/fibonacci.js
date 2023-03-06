const fibonacci = function (n) {
    result = 0;
    preNum1 = 1;
    preNum2 = 1;
    if (n <= 0) {
        return "OOPS";
    } else {
        if (n == 1 || n == 2) {
            result = 1;
        } else {
            for (let i = 3; i <= n; i++) {
                result = preNum1 + preNum2;
                preNum1 = preNum2;
                preNum2 = result;
            }
        }
    }
    return result;
};

console.log(fibonacci("10"))
// Do not edit below this line
module.exports = fibonacci;

const leapYears = function(year) {
    let flag = false;
    if (year % 4 === 0 ){
        flag = true;
    }
    if (year % 100 === 0 ){
        flag = false;
    }
    if (year % 400 === 0 ) {
        flag = true;
    }
    return flag;
};

let year = 1996
console.log(year)
console.log(leapYears(year))

// Do not edit below this line
module.exports = leapYears;

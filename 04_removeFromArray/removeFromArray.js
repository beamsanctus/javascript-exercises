const removeFromArray = function () {
    let arrArg = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        let index = arrArg.indexOf(arguments[i]);
        console.log(arguments[i] + '= index(' + index + ')');
        if (index >= 0)
            arrArg.splice(index, 1);
        console.log(arrArg);
    }
    return arrArg;
};


//removeFromArray([1, 2, 3, 4], 7, "tacos");

// Do not edit below this line
module.exports = removeFromArray;

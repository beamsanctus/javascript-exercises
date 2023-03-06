const palindromes = function (word) {
    let arr = word.toLowerCase().match(/[A-Za-z]/g);
    let arr1 = arr.slice(0, Math.floor(arr.length / 2))
    let arr2 = arr.slice(Math.floor((arr.length + 1) / 2)).reverse()
    flag = true;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            flag = false;
        }
    }
    return flag;
};

console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;

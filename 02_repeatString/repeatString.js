const repeatString = function ( word, count) { 
    if (count >= 0) {
        return word.repeat(count);
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;

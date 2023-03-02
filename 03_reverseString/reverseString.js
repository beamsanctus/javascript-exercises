const reverseString = function (word) {
    let letters = word.split('');
    let newWord = ''
    for (let i = letters.length-1; i >= 0; i--) {
        newWord += letters[i];
    }
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;

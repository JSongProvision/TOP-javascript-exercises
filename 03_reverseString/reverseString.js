const reverseString = function(stringToReverse) {
    let reversedString = '';
    while (stringToReverse.length > 0) {
        reversedString += stringToReverse[stringToReverse.length -1];
        stringToReverse = stringToReverse.slice(0, stringToReverse.length -1);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

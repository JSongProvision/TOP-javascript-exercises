const repeatString = function(string,num) {
    let concatString = "";
    while (num > 0) {
        concatString += string;
        num--;
    }
    if (num < 0) {
        return "ERROR";
    } else {
        return concatString;
    }
};

// Do not edit below this line
module.exports = repeatString;

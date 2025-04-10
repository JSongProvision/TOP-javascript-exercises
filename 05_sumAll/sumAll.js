const sumAll = function(startNum, endNum) {
    let sum = 0;
    let counter = 0;

    if(startNum < 0 || endNum < 0 || typeof startNum !== 'number' || typeof endNum !== 'number' || !Number.isInteger(startNum) || !Number.isInteger(endNum)) {
        return 'ERROR';
    } else if(startNum < endNum) {
        counter = startNum;
        while(counter <= endNum) {
            sum += counter;
            counter++;
        }
        return sum;
    } else if(startNum > endNum){
        counter = endNum;
        while(counter <= startNum) {
            sum += counter;
            counter++;
        }
        return sum;
    }   else {
        return 'There has been a catastrophic failure in my pride';
    }
    
};

// Do not edit below this line
module.exports = sumAll;

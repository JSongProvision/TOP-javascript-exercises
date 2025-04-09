const removeFromArray = function(givenArray, ...args) {
    while (args.length > 0) {
        if (givenArray.indexOf(args[0]) != -1) {
            givenArray.splice(givenArray.indexOf(args[0]),1);
            console.log("I hit the if");
        } else {
            console.log("I hit the else");
            args.shift();
        }   
    }
    return givenArray;
};
// Do not edit below this line
module.exports = removeFromArray;

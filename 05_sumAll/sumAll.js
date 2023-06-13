const sumAll = function(min, max) {

    if(min < 0 
        || max < 0 
        || typeof integer1 !== "number"
        || typeof integer2 !== "number") {
        return 'ERROR';
    }

    let sum = 0;
    let start = (min > max) ? max : min;
    let end = (min > max) ? min : max;

    for(let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

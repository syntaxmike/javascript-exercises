const fibonacci = function(count) {
    if(+count < 0){
        return 'OOPS';
    }

    if(+count === 0){
        return 0;
    } else if (+count === 1 || +count === 2) {
        return 1;
    }
    return fibonacci(+count - 1) + fibonacci(+count - 2);
};

// Do not edit below this line
module.exports = fibonacci;

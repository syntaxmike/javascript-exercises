const removeFromArray = function(originalArray, ...args) {
    const getAllArgs = args;
    const newArray = originalArray;

    for(let i = 0; i < getAllArgs.length; i++) {
        const index = originalArray.indexOf(getAllArgs[i]);
        if(index > -1) {
            newArray.splice(index, 1);
        }
    }

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;

const palindromes = function (str) {
    const removeNonWords = str.toLowerCase().replace(/[^\w\d]/g, "");
    return removeNonWords.split("").reverse().join("") === removeNonWords;
};

// Do not edit below this line
module.exports = palindromes;

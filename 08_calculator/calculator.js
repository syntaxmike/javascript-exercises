const add = function(aNum, bNum) {
	return aNum + bNum;
};

const subtract = function(aNum, bNum) {
	return aNum - bNum;
};

const sum = function(sumArr) {
	return sumArr.reduce((total, value) => {
    return total + value;
  }, 0)
};

const multiply = function(aNum, bNum, ...arg) {
  if(arg.length <= 0){
    return aNum * bNum;
  }

  let total = aNum * bNum;

  return arg.reduce((total, value) => {
    return total * value;
  }, total)
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(base) {
	if(base === 0){
    return 1;
  }

  return base * factorial(base - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

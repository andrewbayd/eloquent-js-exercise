//this function chacks if number is even or not
const isEven = (number) => {
    if (number < 0) {
        return isEven(-number);
    } else if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        return isEven(number - 2);
    }
};

console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(5));
console.log(isEven(8));
console.log(isEven(-4));
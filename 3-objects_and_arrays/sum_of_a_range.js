// this function returns an array of numbers between two taken arguments with predifined step
const range = (start, end, step = (start < end ? 1 : -1)) => {
    let numbers = [];
    if (start < end) {
        for (let i = start; i <= end; i += step) numbers.push(i);
    } else {
        for (let i = start; i >= end; i += step) numbers.push(i);
    }
    return numbers;
};

//this function returns sum of all elements of array
const sum = (arrayOfNumbers) => {
    let total = 0;
    for (number of arrayOfNumbers) {
        total += number;
    }
    return total;
};

console.log(sum(range(1, 10)));
console.log(sum(range(1, 10, 2)));
console.log(sum(range(10, 1)));
console.log(sum(range(10, 1, -2)));
console.log(sum(range(5, 5)));
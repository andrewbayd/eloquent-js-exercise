/* Implement every as a function that takes an array and a predicate function as parameters.
It returns true when the given function returns true for every element in the array.
This is implementation using some method*/

function every (array, test) {
    return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
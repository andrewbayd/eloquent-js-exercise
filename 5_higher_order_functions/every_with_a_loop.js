/* Implement every as a function that takes an array and a predicate function as parameters.
It returns true when the given function returns true for every element in the array.
This is implementation using for loop*/

function every (array, test) {
    for (element of array) {
        if (!test(element)) return false;
    }
    return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
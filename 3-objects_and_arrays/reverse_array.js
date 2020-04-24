//this function takes array as argument and returns new array that has the same elements in reversed order
const reverseArray = (array) => {
    let reversedArray = [];
    for (element of array) reversedArray.unshift(element);
    return reversedArray;
};

//this function takes array as argument and reverse this array
const reverseArrayInPlace = (array) => {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let oldValue = array[i];
        array[i] = array[array.length - 1 -i];
        array[array.length - 1 -i] = oldValue;
    }
};

let arrayToReverse = [1, 6, 'seven', true];
reverseArrayInPlace(arrayToReverse);
console.log(arrayToReverse);
console.log(reverseArray(arrayToReverse));
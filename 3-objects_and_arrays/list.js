//this function converts array to list
const arrayToList = array => {
    let list = null;
    for (i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list}
    }
    return list;
};

//this function converts list to array
const listToArray = list => {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
};

//this function takes an element and a list and creates a new list that adds the element to the front of the input list
const prepend = (element, list) => {
    return {value: element, rest: list}
};

//this function takes a list and a number and returns the element at the given position in the list
const nth = (list, index) => {
    if (list === null) return undefined;
    else if (index === 0) return list.value;
    else return nth(list.rest, index - 1);
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nth(arrayToList([10, 20, 30]), 4));
// → undefined
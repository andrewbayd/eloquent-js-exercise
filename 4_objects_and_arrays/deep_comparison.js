// this function takes two values and returns true
// only if they are the same value or are objects with the same properties,
// where the values of the properties are equal when compared with a recursive call 
const deepEqual = (value1, value2) => {
    if (value1 === value2) return true;

    if (value1 == null || value1 == null || 
        typeof value1 != "object" || typeof value2 != "object") return false;

    const keys1 = Object.keys(value1), keys2 = Object.keys(value2);

    if (keys1.length != keys2.length) return false;

    for (let key of keys1) {
        if (!keys2.includes(key) || (!deepEqual(value1[key], value2[key]))) return false;
    }

    return true;
}

let obj1 = {here: {is: "an"}, object: 2};
let obj2 = {here: 1, object: 2};
let obj3 = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj1, obj1));
// → true
console.log(deepEqual(obj1, obj2));
// → false
console.log(deepEqual(obj1, obj3));
// → true
//this function takes strig and character as parameters and return count of that caracter is in the string
const charCount = (string, charToCount) => {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === charToCount) {
            counter++;
        }
    };
    return counter;
};

console.log(charCount("abracadabra", "a"));
console.log(charCount("abracadabra", "b"));
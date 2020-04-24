const charCount = (word, charToCount) => {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === charToCount) {
            counter++;
        }
    };
    return counter;
};

console.log(charCount("abracadabra", "a"));
console.log(charCount("abracadabra", "b"));
const size = 8;
let pattern = "";
for (let x = 1; x <= size; x++) {
    for (let y = 1; y <= size; y++) {
        if ((x + y) % 2 === 0) {
            pattern += " ";
        } else {
            pattern += "#";
        }
    }
    pattern += "\n"
}
console.log(pattern);
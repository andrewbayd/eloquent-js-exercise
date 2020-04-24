/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard. */

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
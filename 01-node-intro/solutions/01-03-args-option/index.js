/**
 * Node.js CLI basic, accept command option
 *
 * Exercise:
 * 1. Add command line option to "write" the text
 * - Ex. node index.js w "Once upon a time"
 *
 * 2. When writing a new text, it must continue on the next line.
 *
 * 3. Test and see if it works as expected.
 *
 * Challenge:
 * 1. If the option is not `w`, display error "invalid option"
 */

const fs = require("fs");

const filePath = "data.txt";

const option = process.argv[2];
const input = process.argv[3];

if (option === "w") {
  fs.appendFileSync(filePath, input + "\n");
  console.log("appended:", input);
} else {
  console.log("invalid option");
}

// Challenge:
// 1. Add "read" option
// 2. Add "clear" option

/**
 * # Node.js Read command line arguments
 *
 * ## Exercise:
 * 1. Pass the text to the command line to write to the file
 *    - Ex. node index.js hello
 *    - Then "hello" should be written to the data.txt
 *
 * ## Challenge:
 * 1. How to append the text with space?
 *    - Ex. "This is the sentence"
 *
 * 2. Make the new input text go into the next line.
 *
 * 3. Test and see if it works as expected
 */

const fs = require("fs");

const filePath = "data.txt";
const input = process.argv[2];

fs.appendFileSync(filePath, input + "\n");

console.log(input, "was written in", filePath);

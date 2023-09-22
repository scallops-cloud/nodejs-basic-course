/**
 * Node.js Read & Write Basic
 *
 * Exercise:
 * 1. Write text "Hello world" to data.txt
 *
 * 2. Append text "Second line" to the 2nd line of data.txt
 * - The previous text must remain on the first line.
 *
 * 3. Read the whole file, then console.log the file content.
 *
 * 4. Test and see if it works as expected
 */

const fs = require("fs");

const filePath = "./data.txt";

fs.writeFileSync(filePath, "Hello world");
fs.appendFileSync(filePath, "\nSecond line");

const content = fs.readFileSync(filePath);
console.log("content of file:", content.toString());

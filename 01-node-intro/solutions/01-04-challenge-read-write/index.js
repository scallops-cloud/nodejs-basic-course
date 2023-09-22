/**
 * Node.js CLI more command options
 *
 * Exercise:
 * 1. While preserving `w` option, add new option as in next exercises.
 *
 * 2. Add option read `r` to read the file content.
 * - Ex. node index.js r
 * - It will display the whole content of data.txt
 *
 * 3. Add option clear `c` to delete all file content.
 * - Ex. node index.js c
 *
 * Challenge:
 * 1. Add option duplicate `d` to duplicate file content, For example,
 * - Before:
 * ```
 * This is the content No. 1
 * This is the content No. 2
 * ```
 * - Run command: node index.js d
 * - After:
 * ```
 * This is the content No. 1
 * This is the content No. 2
 * This is the content No. 1
 * This is the content No. 2
 * ```
 */

const fs = require("fs");

const filePath = "data.txt";

const option = process.argv[2];
const input = process.argv[3];

if (option === "w") {
  fs.appendFileSync(filePath, input + "\n");
  console.log("appended:", input);
} else if (option === "r") {
  const content = fs.readFileSync(filePath);
  console.log("file content:", content.toString());
} else if (option === "c") {
  fs.writeFileSync(filePath, "");
  console.log("the file has been clear");
} else {
  console.log("invalid option");
}

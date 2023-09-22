/**
 * Node.js Refactor and function import
 *
 * Exercise:
 * 1. Create file `utils.js`.
 *
 * 2. Refactor and move logic of write, read and clear to the `utils.js`.
 *
 * 3. Test that all usage must remain the same.
 *
 * Read More:
 * - Why refactor?
 *    - Developers spend time more than 80% reading rather than writing code.
 *    - Ref: https://bayrhammer-klaus.medium.com/you-spend-much-more-time-reading-code-than-writing-code-bc953376fe19
 */

const { write, read, clear } = require("./utils");

const option = process.argv[2];
const input = process.argv[3];

if (option === "w") {
  write(input);
} else if (option === "r") {
  read();
} else if (option === "c") {
  clear();
} else {
  console.log("invalid option");
}

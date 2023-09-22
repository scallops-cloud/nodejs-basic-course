/**
 * Node.js CLI coloring
 *
 * Exercise:
 * 1. Install `cli-color`
 * - See: https://github.com/medikoo/cli-color
 *
 * 2. Make the header of the read command ("File Content") to have color.
 * - blue font
 * - yellow background
 * - bold text
 *
 * Challenge:
 * 1. Try another possibilities of coloring
 *
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

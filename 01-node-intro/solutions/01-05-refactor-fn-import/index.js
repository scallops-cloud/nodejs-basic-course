import { write, read, clear } from "./utils.js";

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

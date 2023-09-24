import { write, read, clear } from "./utils.js";

const option = process.argv[2];
const input = process.argv[3];

if (option === "add") {
  write(input);
} else if (option === "list") {
  read();
} else if (option === "clear") {
  clear();
} else {
  console.log("invalid option");
}

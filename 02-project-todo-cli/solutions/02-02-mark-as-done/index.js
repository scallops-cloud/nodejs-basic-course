const { write, read, clear, markDone } = require("./utils");

const option = process.argv[2];
const input = process.argv[3];

if (option === "add") {
  write(input);
} else if (option === "list") {
  read();
} else if (option === "done") {
  markDone(input);
} else if (option === "clear") {
  clear();
} else {
  console.log("invalid option");
}

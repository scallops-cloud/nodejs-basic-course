const fs = require("fs");
const clc = require("cli-color");

const filePath = "data.txt";

function write(input) {
  fs.appendFileSync(filePath, input + "\n");
  console.log("appended:", input);
}

function read() {
  const content = fs.readFileSync(filePath);
  console.log(clc.blue.bgYellowBright.bold("File Content:"));

  console.log(content.toString());
}

function clear() {
  fs.writeFileSync(filePath, "");
  console.log("the file has been clear");
}

module.exports = {
  write,
  read,
  clear,
};

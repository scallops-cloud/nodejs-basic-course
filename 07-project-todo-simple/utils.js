const fs = require("fs");
const clc = require("cli-color");

const filePath = "data.txt";

function write(input) {
  fs.appendFileSync(filePath, input + "\n")

  printHeader()
  console.log('appended:', input)
}

function read() {
  const content = fs.readFileSync(filePath)

  printHeader()
  console.log(content.toString())
}

function clear() {
  printHeader()
  console.log('the file has been clear')
}

function printHeader() {
  console.log(clc.bgGreenBright.bold('Todo App!') + "\n")
}

module.exports = {
  write, read, clear
}
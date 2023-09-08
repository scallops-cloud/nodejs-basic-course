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
  const text = content.toString()
  const list = text.trim().split("\n")
  

  printHeader()
  console.log(`Total todos: ${list.length}\n`)
  for (let i = 0; i < list.length; i++) {
    console.log(`${i+1}. ${list[i]}`)
  }
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
const fs = require("fs");
const clc = require("cli-color");

const filePath = "data.txt";
const doneFilePath = "done.txt";

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

function markDone(itemNumber) {
  // 1. read all
  const content = fs.readFileSync(filePath)
  const text = content.toString()
  const list = text.trim().split("\n")

  // 2. find the line from itemNumber
  // 3. remove that line
  const doneItem = list.splice(itemNumber - 1, 1)
  console.log('found ', doneItem)

  // 4. append removed item to the done.txt
  fs.appendFileSync(doneFilePath, doneItem.join("\n") + "\n")

  // 5. write the new set of todos without removed line
  fs.writeFileSync(filePath, list.join("\n") + "\n")

  console.log(`marked ${itemNumber}. as done.`)
}

module.exports = {
  write, read, clear, markDone
}
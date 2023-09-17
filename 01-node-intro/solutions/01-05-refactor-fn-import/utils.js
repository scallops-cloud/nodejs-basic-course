const fs = require("fs");

const filePath = "data.txt";

function write(input) {
  fs.appendFileSync(filePath, input + "\n")
  console.log('appended:', input)
}

function read() {
  const content = fs.readFileSync(filePath)
  console.log('file content:')
  console.log(content.toString())
}

function clear() {
  fs.writeFileSync(filePath, "")
  console.log('the file has been clear')
}

module.exports = {
  write, read, clear
}
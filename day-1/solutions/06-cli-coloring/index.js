// 1. npm init -y
// 2. npm install cli-color

const { write, read, clear } = require("./utils")

const option = process.argv[2]
const input = process.argv[3]

if (option === 'w') {
  write(input)
}
else if (option === 'r') {
  read()
}
else if (option === 'c') {
  clear()
}
else {
  console.log('invalid option')
}
// Create a todo app 
// Specs:
// 1. Can mark todo item as done using "node index.js done 2"
// 2. When the item is marked as done, it is removed from data.txt
// 3. The done item will be appended to done.txt

// Challenge: 
// If the number is invalid, return error


const { write, read, clear, markDone } = require("./utils")

const option = process.argv[2]
const input = process.argv[3]

if (option === 'add') {
  write(input)
}
else if (option === 'list') {
  read()
}
else if (option === 'done') {
  markDone(input)
}
else if (option === 'clear') {
  clear()
}
else {
  console.log('invalid option')
}
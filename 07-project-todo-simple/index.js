// Create a todo app 
// Specs:
// 1. Can use "add" to add a new todo item
// 2. Can use "list" to list all todo items
// 3. Can use "clear" to clear all todo items
// 4. Start all the result with title "Todo App" with color
// Can decorate color as you like
// Can duplicate previous code to continue editing

// Challenge: 
// 1. Below title, display the total amount of the items (Hint: split)
// 2. For each item, add the number 1, 2, 3, 4,.. in front of them.


const { write, read, clear } = require("./utils")

const option = process.argv[2]
const input = process.argv[3]

if (option === 'add') {
  write(input)
}
else if (option === 'list') {
  read()
}
else if (option === 'clear') {
  clear()
}
else {
  console.log('invalid option')
}
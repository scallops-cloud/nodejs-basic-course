// 1. Refactor: move to function
// 2. Refactor: move to file
//    - utils.write
//    - write

// Chalenge: TODO: think of the challenge for people who finished early

// Why refactor?
// Developers spend time more than 80% reading rather than writing code.
// ref: https://bayrhammer-klaus.medium.com/you-spend-much-more-time-reading-code-than-writing-code-bc953376fe19

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
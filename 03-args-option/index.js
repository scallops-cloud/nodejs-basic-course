const fs = require("fs");

const filePath = "data.txt";

const option = process.argv[2]
const input = process.argv[3]


if (option === 'w') {
  fs.appendFileSync(filePath, input + "\n")
  console.log('appended:', input)
}
else {
  console.log('invalid option')
}

// Challenge: 
// 1. Add "read" option
// 2. Add "clear" option


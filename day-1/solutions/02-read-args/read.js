const fs = require("fs")

const content = fs.readFileSync("./data.txt")
console.log("Content of file:", content.toString())
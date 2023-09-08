const fs = require("fs");

const filePath = "./data.txt"

fs.writeFileSync(filePath, "Hihi")

const content = fs.readFileSync(filePath)
console.log(content.toString())
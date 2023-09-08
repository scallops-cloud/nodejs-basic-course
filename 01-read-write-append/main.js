const fs = require("fs");

const filePath = "./data.txt"

fs.writeFileSync(filePath, "Hihi")
fs.appendFileSync(filePath, "\nsecond line")

const content = fs.readFileSync(filePath)
console.log(content.toString())
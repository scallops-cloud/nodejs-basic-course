const fs = require("fs");

const filePath = "./data.txt";

fs.writeFileSync(filePath, "Hello world");
fs.appendFileSync(filePath, "\nSecond line");

const content = fs.readFileSync(filePath);
console.log("content of file:", content.toString());

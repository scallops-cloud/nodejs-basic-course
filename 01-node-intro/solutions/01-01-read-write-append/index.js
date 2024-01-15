import fs from "fs";

const filePath = "./data.txt";

fs.writeFileSync(filePath, "Hello world");
fs.appendFileSync(filePath, "\nSecond line");

const content = fs.readFileSync(filePath, "utf-8");
console.log("content of file:", content);

import fs from "fs";
import clc from "cli-color";

const filePath = "data.txt";

export function write(input) {
  fs.appendFileSync(filePath, input + "\n");

  printHeader();
  console.log("appended:", input);
}

export function read() {
  const content = fs.readFileSync(filePath);
  const text = content.toString();
  const list = text.trim().split("\n");

  printHeader();
  console.log(`Total todos: ${list.length}\n`);
  for (let i = 0; i < list.length; i++) {
    console.log(`${i + 1}. ${list[i]}`);
  }
}

export function clear() {
  fs.writeFileSync(filePath, "");

  printHeader();
  console.log("the file has been clear");
}

export function printHeader() {
  console.log(clc.bgGreenBright.bold("Todo App!") + "\n");
}

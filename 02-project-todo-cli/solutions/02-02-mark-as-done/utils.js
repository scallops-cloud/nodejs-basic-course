import fs from "fs";
import clc from "cli-color";

const filePath = "data.txt";
const doneFilePath = "done.txt";

export function write(input) {
  fs.appendFileSync(filePath, input + "\n");

  printHeader();
  console.log("appended:", input);
}

export function read() {
  const content = fs.readFileSync(filePath, "utf-8");
  const text = content;
  const list = text.trim().split("\n");

  printHeader();
  console.log(`Total todos: ${list.length}\n`);
  for (let i = 0; i < list.length; i++) {
    console.log(`${i + 1}. ${list[i]}`);
  }
}

export function clear() {
  printHeader();
  console.log("the file has been clear");
}

export function printHeader() {
  console.log(clc.bgGreenBright.bold("Todo App!") + "\n");
}

export function markDone(itemNumber) {
  // 1. read all
  const content = fs.readFileSync(filePath, "utf-8");
  const text = content;
  const list = text.trim().split("\n");

  if (itemNumber < 0 || itemNumber > list.length) {
    console.log("invalid item number");
    return;
  }

  // 2. find the line from itemNumber
  // 3. remove that line
  const doneItem = list.splice(itemNumber - 1, 1);
  console.log("found ", doneItem);

  // 4. append removed item to the done.txt
  fs.appendFileSync(doneFilePath, doneItem.join("\n") + "\n");

  // 5. write the new set of todos without removed line
  fs.writeFileSync(filePath, list.join("\n") + "\n");

  console.log(`marked ${itemNumber}. as done.`);
}

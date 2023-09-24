import fs from "fs";

const filePath = "data.txt";
const doneFilePath = "done.txt";

export function write(input) {
  fs.appendFileSync(filePath, input + "\n");

  printHeader();
  console.log("appended:", input);
}

export function read() {
  const content = fs.readFileSync(filePath);
  const text = content.toString();
  const list = text.trim().split("\n");

  return list;
}

export function clear() {
  printHeader();
  console.log("the file has been clear");
}

export function printHeader() {
  console.log("Todo App!" + "\n");
}

export function markDone(itemNumber) {
  // 1. read all
  const content = fs.readFileSync(filePath);
  const text = content.toString();
  const list = text.trim().split("\n");

  if (itemNumber < 0 || itemNumber > list.length) {
    console.log("invalid item number");
    return;
  }

  // 2. find the line from itemNumber
  // 3. remove that line
  const doneItem = list.splice(itemNumber, 1);
  console.log("found ", doneItem);

  // 4. append removed item to the done.txt
  fs.appendFileSync(doneFilePath, doneItem.join("\n") + "\n");

  // 5. write the new set of todos without removed line
  fs.writeFileSync(filePath, list.join("\n") + "\n");

  console.log(`marked ${itemNumber}. as done.`);
}

const fs = require("fs");

// "id", "title", "description" and "createdAt" for each todo
const todoDatabase = [
  
]


const filePath = "data.txt";
const doneFilePath = "done.txt";

/**
 * Add new todo item.
 * Returns errorCode if error, null if successful.
 * @param {string} input - todo title
 */
function addItem(input) {
  if (input.length > 30) {
    return "too_long";
  }

  if (input.length < 5) {
    return "too_short";
  }

  fs.appendFileSync(filePath, input + "\n");

  return null;
}

function read() {
  const content = fs.readFileSync(filePath);
  const text = content.toString();
  const list = text.trim().split("\n");

  return list;
}

function markDone(itemNumber) {
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

  // 4. append removed item to the done.txt
  fs.appendFileSync(doneFilePath, doneItem.join("\n") + "\n");

  // 5. write the new set of todos without removed line
  fs.writeFileSync(filePath, list.join("\n") + "\n");
}

module.exports = {
  addItem,
  read,
  markDone,
};

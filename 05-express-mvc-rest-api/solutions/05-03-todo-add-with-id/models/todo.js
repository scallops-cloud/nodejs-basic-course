const fs = require("fs");

const filePath = "data.txt";
const doneFilePath = "done.txt";

// "id", "title", "description" and "createdAt" for each todo
const todoDatabase = [
  {
    id: 10,
    title: "buy a toothbrush",
    description: "...",
    createdAt: "2023-09-19T11:05:26.887Z",
    isDone: false,
  },
  {
    id: 15,
    title: "Reserve the restaurant",
    description: "Call xxx for reserving 2 seats at 19:00 tomorrow",
    createdAt: "2023-09-19T11:10:26.887Z",
    isDone: false,
  },
];

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

function list() {
  return todoDatabase.filter((todo) => !todo.isDone);
}

function markDone(todoId) {
  const todoIdNum = parseInt(todoId, 10);
  const todo = todoDatabase.find((todo) => todo.id === todoIdNum);

  if (!todo) {
    throw new Error(`${todoId} is not found`);
  }

  todo.isDone = true;
}

module.exports = {
  list,
  addItem,
  markDone,
};

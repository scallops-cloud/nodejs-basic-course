/**
 * # Express.js Todo Website - MVC
 *
 * Implement the todo adding with the new model
 *
 * ## Exercise:
 * 1. Update todo add to work with the new model.
 *    - The exisitng checking logic must remain the same.
 *    - Hint: We need to manually assign the ID to the new todo item.
 *
 * 2. Add More optional field for todo description.
 *
 * ## Challenges:
 * 1. Question: What is the proper ID to assign to the todo?
 * 2. Return error if the description is longer than 50 characters.
 */

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const todoController = require("./controllers/todoController");

const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public"));
app.use(helmet());
app.use(morgan("dev"));

app.get("/todos", todoController.listTodos);
app.post("/todos", todoController.createTodo);
app.post("/todos/:todoIndex/done", todoController.updateTodoAsDone);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

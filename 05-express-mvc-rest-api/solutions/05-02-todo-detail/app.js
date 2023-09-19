/**
 * # Express.js Todo Website - MVC
 *
 * Add more detail to the todo item by updating whole model, view, controller
 *
 * ## Exercise:
 * 1. Redesign the todo model to include the "id", "title", "description" and "createdAt" for each todo
 *    - No need to read write the file, create the global variables to store the todos.
 *
 * 2. Update the Todo List page to work with the new todo model.
 *
 * 3. Create new route and controller for getting todo details at "http://localhost:8000/todos/:id"
 *    - Returns the todo id for a sample data
 *
 * 4. Create new view for todo detail:
 *    - For the title, display: "Todo Detail"
 *    - For the below information, display: "ID", "Title", "Description" and "Created At"
 *
 * ## Challenges:
 * 1. Question: Can we still implement the todo detail without "ID"?
 * 2. Display Todo ID instead of running number in the Todo List Page.
 * 3. Order the todo ID by Created At, from new to old.
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

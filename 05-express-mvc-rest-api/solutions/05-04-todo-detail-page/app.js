/**
 * # Express.js Todo Website - Todo Detail Page
 *
 * Implement the todo adding with the new model
 *
 * ## Exercise:
 * 1. Create a new function for todo model to get a single todo.
 *
 * 2. Create a new route and controller for getting todo details at "http://localhost:8000/todos/:id"
 * - Returns the todo id for a sample data.
 *
 * 3. Create new view for todo detail:
 * - For the title, display: "Todo Detail".
 * - For the below information, display: "ID", "Title", "Description" and "Created At".
 *
 * ## Challenges:
 * 1. Also format the Created At in detail view to be more readable.
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

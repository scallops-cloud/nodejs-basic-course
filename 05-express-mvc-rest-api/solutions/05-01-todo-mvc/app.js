/**
 * # Express.js Todo Website - MVC
 *
 * Refactor Todo website to be in the mvc concept.
 *
 * ## Specs:
 * 1. Create 2 more folders: models, controllers.
 *
 * 2. Separate the logics into 3 folders accordingly.
 * - Hint: controller functions usually use this naming: list, get, update, create, etc.
 *
 * 3. Test that all the functionalities are the same.
 *
 * ## Challenges:
 * 1. Question: How is the code improved using MVC?
 * 2. Question: If we were to use database, which parts will be responsible for connectin database?
 *
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

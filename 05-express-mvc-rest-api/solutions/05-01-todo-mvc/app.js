/**
 * # Express.js Todo Website - MVC
 *
 * Refactor Todo website to be in the mvc concept.
 *
 * ## Specs:
 * 1. Create 2 more folders: models, controllers.
 * 2. Separate the logics into 3 folders accordingly.
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
const { read, markDone, addItem } = require("./utils");

const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public"));
app.use(helmet());
app.use(morgan("dev"));

app.get("/todos", (req, res) => {
  const errorCode = req.query.errorCode;

  const todos = read();

  res.render("todo-list.ejs", { todos, errorCode });
});

app.post("/todos", (req, res) => {
  const title = req.body.title;

  const errorCode = addItem(title);

  if (errorCode) {
    res.redirect(`/todos?errorCode=${errorCode}`);
    return;
  }

  res.redirect("/todos");
});

app.post("/todos/:todoIndex/done", (req, res) => {
  markDone(req.params.todoIndex);

  res.redirect("/todos");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

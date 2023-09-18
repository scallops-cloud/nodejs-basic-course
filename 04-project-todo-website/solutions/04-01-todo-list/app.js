/**
 * # Express.js Todo Website - Todo List
 *
 * Create a Todo website using an existing Todo CLI to convert to web version.
 *
 * ## Specs:
 * 1. Todo List: "http://localhost:8000/todos"
 *    - Return the website with title "Todo App"
 *    - Display the list of todos we have with the number in front starting from 1.
 *    - Try adding todos to data.txt manually to see the result changed.
 *
 * 2. Done button:
 *    - For each todo item, there is a button "Done".
 *    - When click "Done", the website submits request to "http://localhost:8000/todos/NUMBER/done".
 *    - After finish updating, redirect to Todo List page.
 *
 * ## Challenges:
 * 1. Question: What do you learn from this project?
 *
 * 2. New button at the bottom, "Show done items".
 *  - When click, it navigates to "http://localhost:8000/todos?show_done=1".
 *  - The button becomes "Hide done items".
 *  - Display the list of done items under the list
 *
 * 3. Implement "Hide done items" in your understanding.
 *
 * 4. Make the todo more beautiful with CSS and images.
 *
 */

const express = require("express");
const { read, markDone } = require("./utils");

const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public"));

app.get("/todos", (req, res) => {
  const todos = read();

  res.render("todo-list.ejs", { todos });
});

app.post("/todos/:todoIndex/done", (req, res) => {
  markDone(req.params.todoIndex);

  res.redirect("/todos");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

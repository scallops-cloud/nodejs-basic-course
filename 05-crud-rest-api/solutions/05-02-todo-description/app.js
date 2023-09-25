/*
Objective: Understand the flow of building REST API with Postman 

Exercise:
- Update Postman Add to have description.
- Add new field for "description"
- Check Postman Add to have description.
- Check if the Postman list have the description.
*/

import express from "express";
import { findTodo, listTodos, createTodo } from "./models/todo.js";

const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/todos", (req, res) => {
  const todos = listTodos();
  res.json({ data: todos });
});

app.get("/todos/:todoId", (req, res) => {
  const todoId = parseInt(req.params.todoId, 10);
  const todo = findTodo(todoId);

  if (!todo) {
    res.status(404).json({ error: { message: "todo not found" } });
    return;
  }

  res.json({ data: todo });
});

app.post("/todos", (req, res) => {
  const title = req.body.title;
  const desc = req.body.desc;

  if (title.length > 30) {
    res
      .status(400)
      .json({ error: { message: "title must not exceed 30 characters" } });
    return;
  }

  const todo = createTodo({ title, desc });

  res.json({ data: todo });
});

app.patch(`/todos/:todoId`, (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

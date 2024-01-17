import express from "express";
import { findTodo, listTodos } from "./models/todo.js";

const app = express();
const port = 8000;

app.get("/todos", (req, res) => {
  const todos = listTodos();

  // 1. Implement: returns a list of todos
});

app.get("/todos/:todoId", (req, res) => {
  const todoId = parseInt(req.params.todoId, 10);
  const todo = findTodo(todoId);

  // 2. Implement: returns a single todo
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

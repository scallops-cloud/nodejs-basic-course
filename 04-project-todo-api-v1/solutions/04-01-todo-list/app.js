import express from "express";
import cors from "cors";
import { findTodo, listTodos } from "./models/todo.js";

const app = express();
const port = 8000;

app.use(cors());

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

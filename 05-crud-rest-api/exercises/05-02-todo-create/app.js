import express from "express";
import { findTodo, listTodo, createTodo } from "../05-99-model/todo.mjs";

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/todos", (req, res) => {
  const todos = listTodo();
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
  /**
   * 1. Get the `title` and `description` from req.body
   * 2. Validate the `title` length, if more than 30 characters, response error
   * 3. Validate the `description` length, if more than 100 characters, response error
   * 4. Create new todo with `createTodo`
   * 5. Response the created todo
   */
  throw new Error("Not implemented");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

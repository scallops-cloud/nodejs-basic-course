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
  const { title, description } = req.body;

  // Create a new todo using the `createTodo` function (imported from the model, line: 2)
  // const todo = ...

  // Return the newly created todo with a 201 status code
  // res.status(201).json({
  //   data: todo,
  // });

  throw new Error("Not implemented");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

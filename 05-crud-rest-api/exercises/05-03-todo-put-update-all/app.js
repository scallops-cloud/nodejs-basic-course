import express from "express";
import { findTodo, listTodos, createTodo } from "./models/todo.js";

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.put("/todos/:todoId", (req, res) => {
  /**
   * 1. Get the `todoId` from request (req) parameters. Don't forget to parse it to integer
   * 2. Get the `title` and `desc` from body
   * 3. Send all data to update with `updateTodo`
   * 4. If the return from updateTodo is null, response error
   * 5. Response the updatedTodo
   */
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

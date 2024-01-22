import express from "express";
import {
  findTodo,
  listTodo,
  createTodo,
  updateTodo,
} from "../05-99-model/todo.mjs";

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

  if (title.length > 30) {
    res.status(400).json({ error: { message: "title too long" } });
    return;
  }

  if (description.length > 100) {
    res.status(400).json({ error: { message: "description too long" } });
    return;
  }

  const todo = createTodo({
    title,
    description,
  });

  res.json({ data: todo });
});

app.put("/todos/:todoId", (req, res) => {
  const id = parseInt(req.params.todoId, 10);

  // Read title and description from req.body
  // const { title, description, isDone } = ...

  // Update todo with `updateTodo`
  // Hint: updateTodo accepts 2 arguments, id and attributes
  //
  // const updatedTodo = updateTodo(...);

  // Return the updated todo
  // res.status(200).json({ data: updatedTodo });

  throw new Error("Not implemented");
});

app.patch("/todos/:todoId", (req, res) => {
  const id = parseInt(req.params.todoId, 10);

  // Read request body and store it in `attributes` variable
  // const attributes = ...

  // Update todo with `updateTodo`
  // const updatedTodo = ...

  // Return the updated todo
  // res.status(200).json({ data: updatedTodo });

  throw new Error("Not implemented");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

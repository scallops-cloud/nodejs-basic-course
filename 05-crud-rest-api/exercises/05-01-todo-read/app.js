import express from "express";
import { findTodo, listTodo } from "../05-99-model/todo.mjs";

const app = express();
const port = 8000;

/**
 * Middlewares
 *
 * Middleware in web development is software that bridges or connects different
 * parts of an application.
 *
 * In this code, `express.json()` and `express.urlencoded({ extended: true })`
 * are middleware functions that parse incoming request data before it
 * reaches route handlers. They are called "middleware" because they process the
 * data in the middle of the request-response cycle.
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Route handlers
 *
 * Routes in web development define the way an application responds to a client
 * request for a specific endpoint, which is a URI (or path) and a specific HTTP
 * request method (GET, POST, and so on). Each route can have one or more
 * handler functions, which are executed when the route is matched.
 *
 * In this Express.js code, `/todos` and `/todos/:todoId` are
 * routes that handle GET requests and respond with a list of todos or a
 * specific todo, respectively.
 */
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

/**
 * In a Node.js Express application, `app.listen()` is used to bind and listen for
 * connections on the specified host and port. This is necessary to start the
 * server and begin receiving requests from clients.
 *
 * The code below, starts the server and logs a message to the console
 * indicating that the server is running and listening for requests on the
 * specified port.
 */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

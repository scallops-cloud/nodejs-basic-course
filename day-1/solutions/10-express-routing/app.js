/**
 * # Express.js Routing
 *
 * Implement the basic routing to implement the GET/POST routings with parameters.
 *
 * ## Specs:
 * 1. calling GET to "http://localhost:8000/users?id=20" returns "User ID: 20".
 *    - When changing number 20, the result also changes.
 * 2. calling POST to "http://localhost:8000/users?id=20" with form (name = Manee).
 *    - Returns "User ID: 20, name has been updated to Manee".
 *    - Changing params also changes the result.
 * 3. calling GET to "http://localhost:8000/users/20" returns "User ID: 20".
 *    - Result is the same as 1.
 * 4. calling POST to "http://localhost:8000/users/20" with form (name = Manee).
 *    - Result is the same as 2.
 *
 * ## Challenges:
 * 1. Which one you prefer to use, `users?id=20` or `users/20`? And why?
 * 2. For 3 & 4, allow only numeric ID to match into routes.
 *    - Hint: use route pattern matching without if/else inside
 *
 * ## Hint:
 * - https://expressjs.com/en/4x/api.html#app.METHOD
 * - https://expressjs.com/en/4x/api.html#req.body
 * - https://expressjs.com/en/starter/basic-routing.html
 * - https://expressjs.com/en/guide/routing.html
 *
 */

const express = require("express");
const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("Hello my friends");
});

app.get("/users", (req, res) => {
  const userId = req.query.id;
  res.send(`User ID: ${userId}`);
});

app.post("/users", (req, res) => {
  const userId = req.query.id;
  const name = req.body.name;

  res.send(`User ID: ${userId}, name has been updated to ${name}`);
});

app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});

app.post("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const name = req.body.name;

  res.send(`User ID: ${userId}, name has been updated to ${name}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/**
 * # Express.js Routing
 *
 * Implement the basic routing to implement the GET/POST routings with parameters.
 *
 * ## Specs:
 * 1. calling GET to "http://localhost:8000/users?id=20" returns "User ID: 20".
 *    - When changing number 20, the result also changes.
 * 2. calling POST to "http://localhost:8000/users" with form (id = 20, name = Manee).
 *    - returns "User ID: 20, name has been updated to Manee".
 *    - Changing params also changes the result.
 * 3. calling POST to "http://localhost:8000/users/20" with form (name = Manee).
 *    - result is the same as 2.
 *
 * ## Challenges:
 * 1. calling POST to "http://localhost:8000/users/20" will returns error if userId is not number
 *
 * ## Hint:
 * - https://expressjs.com/en/4x/api.html#app.METHOD
 * - https://expressjs.com/en/starter/basic-routing.html
 * - https://expressjs.com/en/guide/routing.html
 *
 */

const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello my friends");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

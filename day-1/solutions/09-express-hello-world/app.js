/**
 * # Get Started with Express.js
 *
 * Set up express and create a hello world app in express
 *
 * ## Specs:
 * 1. config express to expose port 8000
 * 2. calling to "http://localhost:8000" return "Hello my friends"
 * 3. calling to "http://localhost:8000/about-us" return "About Us"
 *
 * ## Challenges:
 * 1. return the 401 error with the error message when accessing "http://localhost:8000/admin".
 * 2. redirect the "http://localhost:8000/home" to "http://localhost:8000/about-us"
 *
 * ## Hint:
 * - https://expressjs.com/en/starter/installing.html
 * - https://expressjs.com/en/starter/hello-world.html
 * - https://expressjs.com/en/4x/api.html#res.json
 */

const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello my friends");
});

app.get("/about-us", (req, res) => {
  res.send("About Us");
});

app.get("/admin", (req, res) => {
  res.status(401).send("Admin only");
});

app.get("/home", (req, res) => {
  res.redirect("/about-us");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

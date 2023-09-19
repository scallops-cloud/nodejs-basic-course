/**
 * # Express.js More Middlewares
 *
 * Learn to use open-sourced middlewares in the project for better production app
 *
 * ## Specs:
 * 1. Implement "morgan" middleware
 *    - See: https://expressjs.com/en/resources/middleware/morgan.html
 *    - Try the different parameters for morgan(..) to see the differences.
 *    - Question: What is the benefit of using morgan?
 *
 * 2. Implement "helmet" middleware
 *    - See: https://helmetjs.github.io/
 *    - Question: What is the benefit of using helmet?
 *
 * ## Challenges:
 * 1. Explore more existings useful middlewares to try.
 * 2. Question: in which case we need to write our own middlewares?
 * 3. Question: How order of the using different middlewares makes a difference?
 *
 * ## Read More:
 * - What is XSS Attack? https://www.youtube.com/watch?v=jL8GoRDdUEk
 */

const express = require("express");
const { isValidName } = require("./utils");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public"));

app.use(morgan("dev"));
app.use(helmet());

// user database variable here:
const userDatabase = {
  20: "Manee",
  21: "Mana",
  22: "Mano",
};

app.get("/users", (req, res) => {
  const users = Object.keys(userDatabase).map((id) => {
    return { id, name: userDatabase[id] };
  });

  res.render("user-list.ejs", { users });
});

app.get("/test", (req, res) => {
  setTimeout(() => {
    res.send("done");
  }, 1200);
});

app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const name = userDatabase[userId];

  if (!name) {
    res.status(404).send(`Error User ID ${userId} not found`);
    return;
  }

  res.render("user-detail.ejs", { id: userId, name, error: req.query.error });
});

app.post("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const name = req.body.name;

  if (!userDatabase[userId]) {
    res.status(404).send(`Error User ID ${userId} not found`);
    return;
  }

  if (!isValidName(name)) {
    res.redirect(`/users/${userId}?error=invalid name`);
    return;
  }

  userDatabase[userId] = name;

  res.redirect(`/users/${userId}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

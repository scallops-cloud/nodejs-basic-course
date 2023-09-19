/**
 * # Express.js Serving Static files
 *
 * Allow the users to access static files like CSS or images.
 *
 * ## Specs:
 * 1. Log each user request to the console.
 *    - Current time
 *    - request method
 *    - request url
 *
 * 2. Separate the logging middleware to the "middlewares" folder
 *
 * ## Hint:
 * - https://expressjs.com/en/guide/using-middleware.html
 *
 * ### Challenges:
 * 1. Log the status code from the response
 * - Hint: Try to get the output which is not 200 to see if it is correct.
 *
 * 2. Log the duration spent in app processing before respond.
 * - Hint: Try to delay the respond with setTimeout to see if it is correct.
 *
 * 3. Question: Why logging status code and duration is different from others?
 *
 */

const express = require("express");
const { isValidName } = require("./utils");
const loggingMiddleware = require("./middlewares/loggingMiddleware");

const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public"));

app.use(loggingMiddleware);

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

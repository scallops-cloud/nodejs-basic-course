/**
 * # Express.js Serving Static files
 *
 * Allow the users to access static files like CSS or images.
 *
 * ## Specs:
 * 1. Use CSS in CSS files to change the color of the title.
 * 2. Add image to the User list page.
 *
 * ### Challenges:
 * 1. Why do we need to manually specify the folders to serve? Why aren't they served by default?
 * 2. Try serving the static file under the files with path prefix "static"
 *    - Ex. "http://localhost:8000/static/images/cat.jpeg"
 *
 * ## Hint:
 * - https://expressjs.com/en/starter/static-files.html
 *
 */

const express = require("express");
const { isValidName } = require("./utils");

const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public"));

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

app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const name = userDatabase[userId];

  if (!name) {
    res.send(`Error User ID ${userId} not found`);
    return;
  }

  res.render("user-detail.ejs", { id: userId, name, error: req.query.error });
});

app.post("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const name = req.body.name;

  if (!userDatabase[userId]) {
    res.send(`Error User ID ${userId} not found`);
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

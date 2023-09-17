/**
 * # Express.js Template Engine
 *
 * Render the html webpage with form instead of returning text
 *
 * ## Specs:
 * 1. User List: GET "http://localhost:8000/users"
 *    - Return the webpage with the header "User List".
 *    - Display the list of all users with name and id, ex.
 *        • ID: 20 - Manee
 *        • ID: 21 - Mana
 *        • ID: 22 - Mano
 *    - Each item can be linked to the User Detail page
 *
 * 2. User Detail: GET "http://localhost:8000/users/20"
 *    - Return webpage with header "User Title".
 *    - Display the user id and name detail.
 *
 * 3. User Detail page also display the form to update the name
 *    - Under the user detail, display the form for inputting name and submit button.
 *
 * 4. When submitting the form, it submits data with POST to "http://localhost:8000/users/20"
 *    - Once submit, the data is updated, and redirect users back to the detail page with updated data.
 *
 * ## Challenges:
 * 1. If the name has symbol, don't update data and display a error under the form with red color
 *    - Hint: Use query params to indicate if there is an error
 *
 * ## Hint:
 * - https://github.com/mde/ejs/wiki/Using-EJS-with-Express
 * - https://expressjs.com/en/guide/using-template-engines.html#using-template-engines-with-express
 *
 */

const express = require("express");
const { isValidName } = require("./utils");

const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

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

/**
 * # Express.js Routing with data
 *
 * Connect the routing to the temporary database
 *
 * ## Specs:
 * 1. Create a global user database variable with the object mapped between id and user's name
 *    - user id: 20 => name: Manee
 *    - user id: 21 => name: Mana
 *    - user id: 22 => name: Mano
 *
 * 2. calling GET to "http://localhost:8000/users/20"
 *    - returns "User ID: 20 (name: Manee)".
 *    - for 21, returns "User ID: 21 (name: Mana)".
 *
 * 3. calling POST to "http://localhost:8000/users/20" with form (name = YOURNAME).
 *    - Returns "User ID: 20, name has been updated to YOURNAME".
 *    - Update the database, so that when get user id 20, the name is changed to YOURNAME.
 *
 * 4. if the userId not exists, return error
 *
 * ## Challenges:
 * 1. Why the data is gone after restarting the application?
 * 2. Allow app to display and update the user age as well.
 *
 * ## Hint:
 * - Declare JavaScript object above the routing, with the key = id number, value = name.
 * - Update data in the object when POST
 *
 */

const express = require("express");
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

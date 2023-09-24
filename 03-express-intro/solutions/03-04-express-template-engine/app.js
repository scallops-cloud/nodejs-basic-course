import express from "express";
import { isValidName } from "./utils";

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

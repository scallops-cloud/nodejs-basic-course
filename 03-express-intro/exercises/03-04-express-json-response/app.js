import express from "express";
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
  const name = userDatabase[userId];

  if (!name) {
    res.send(`Error User ID ${userId} not found`);
    return;
  }

  // 1. Implement: returns JSON response
  res.send(`User ID: ${userId} (Name: ${name})`);
});

app.post("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const name = req.body.name;

  if (!userDatabase[userId]) {
    res.send(`Error User ID ${userId} not found`);
    return;
  }

  userDatabase[userId] = name;

  // 2. Implement: returns JSON response
  res.send(`User ID: ${userId}, name has been updated to ${name}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

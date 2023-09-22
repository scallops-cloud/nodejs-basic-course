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

// Challenge Version

// app.get("/users/:userId(\\d+)", (req, res) => {
//   const userId = req.params.userId;
//   res.send(`User ID: ${userId}`);
// });

// app.post("/users/:userId(\\d+)", (req, res) => {
//   const userId = req.params.userId;
//   const name = req.body.name;

//   res.send(`User ID: ${userId}, name has been updated to ${name}`);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

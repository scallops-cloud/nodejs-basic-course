import express from "express";
const app = express();
const port = 8000;

app.get("/users", (req, res) => {
  // 1. Implement: returns "Users ID: [NUMBER]", ex. "User ID: 20"
});

app.post("/users", (req, res) => {
  // 2. Implement: returns "User ID: [NUMBER], name has been updated to [NAME]".
});

app.get("/users/:userId", (req, res) => {
  // 3. Implement: returns "Users ID: [NUMBER]", ex. "User ID: 20"
});

app.post("/users/:userId", (req, res) => {
  // 4. Implement: returns "User ID: [NUMBER], name has been updated to [NAME]".
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

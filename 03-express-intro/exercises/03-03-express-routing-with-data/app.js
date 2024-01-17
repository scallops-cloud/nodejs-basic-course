import express from "express";
const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const userDatabase = {
  20: "Manee",
  21: "Mana",
  22: "Mano",
};

app.get("/users/:userId", (req, res) => {
  // 1. Implement: returns "User ID: [NUMBER] (name: [NAME])"
});

app.post("/users/:userId", (req, res) => {
  // 2. Implement: returns "User ID: [NUMBER], name has been updated to [NAME]".
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

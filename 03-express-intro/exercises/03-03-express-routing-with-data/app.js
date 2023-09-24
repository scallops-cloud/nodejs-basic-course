import express from "express";
const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const userDatabase = {
  // user data here
};

app.get("/users/:userId", (req, res) => {
  // Implement here
});

app.post("/users/:userId", (req, res) => {
  // Implement here
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

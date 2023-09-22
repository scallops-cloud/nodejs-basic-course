const express = require("express");
const { read, markDone } = require("./utils");

const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public"));

app.get("/todos", (req, res) => {
  const todos = read();

  res.render("todo-list.ejs", { todos });
});

app.post("/todos/:todoIndex/done", (req, res) => {
  markDone(req.params.todoIndex);

  res.redirect("/todos");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

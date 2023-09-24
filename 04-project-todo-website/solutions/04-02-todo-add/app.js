import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import { read, markDone, addItem } from "./utils";

const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public"));
app.use(helmet());
app.use(morgan("dev"));

app.get("/todos", (req, res) => {
  const errorCode = req.query.errorCode;

  const todos = read();

  res.render("todo-list.ejs", { todos, errorCode });
});

app.post("/todos", (req, res) => {
  const title = req.body.title;

  const errorCode = addItem(title);

  if (errorCode) {
    res.redirect(`/todos?errorCode=${errorCode}`);
    return;
  }

  res.redirect("/todos");
});

app.post("/todos/:todoIndex/done", (req, res) => {
  markDone(req.params.todoIndex);

  res.redirect("/todos");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

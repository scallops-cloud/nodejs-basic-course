import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import todoController from "./controllers/todoController";

const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public"));
app.use(helmet());
app.use(morgan("dev"));

app.get("/todos", todoController.listTodos);
app.post("/todos", todoController.createTodo);
app.post("/todos/:todoIndex/done", todoController.updateTodoAsDone);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import read from "../models/todo";

// list, get, update, create, etc.

export const list = (req, res) => {
  const errorCode = req.query.errorCode;

  const todos = read();

  res.render("todo-list.ejs", { todos, errorCode });
};

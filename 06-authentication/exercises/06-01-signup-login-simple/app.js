import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import { User } from "./models/user.js";

const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(helmet());
app.use(morgan("dev"));

app.post("/signup", (req, res) => {
  // 🍎 Implement: 2.1. Retrieve `email` and `password` from request.

  // Check if user already exists
  const existingUser = User.findOne({ email });
  //  🍎 Implement: 2.2. If the user already exists,
  //     return 400 error with the message "user already exists".
  // if (existingUser) {
  //   res.status(...).json(...);
  //   return;
  // }

  // Store new user in database
  const user = new User({ email, password });
  user.save();

  //  🍎 Implement: 2.3. Return json in this format if successfully signup
  // {
  //   "data": {
  //     "email": "email@sample.com"
  //   }
  // }
});

app.post("/login", (req, res) => {
  // 🍎 Implement: 3.1. Retrieve `email` and `password` from request.

  // Fetch user from database
  const user = User.findOne({ email });
  // 🍎 Implement: 3.2. If no user found, return 400 error with
  //    the message "Invalid email or password"
  // if (!user) {
  //   res.status(...).json(...);
  //   return;
  // }

  // Check password
  // 🍎 Implement: 3.3. check if password is correct by
  //    comparing equal input password and user password from database.
  const validPassword = "Implement: replace this with your code";
  if (!validPassword) {
    return res
      .status(400)
      .send({ error: { message: "Invalid email or password" } });
  }

  res.send({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

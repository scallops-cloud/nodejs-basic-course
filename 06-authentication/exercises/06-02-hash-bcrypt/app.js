import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import { User } from "./models/user.js";
import bcrypt from "bcrypt";

const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(helmet());
app.use(morgan("dev"));

app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  const existingUser = User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: { message: "user already exists" } });
  }

  // Hash password
  // 🍎 Implement: 1.1. Instead of saving plain text password,
  //    hash it first with `bcrypt.hashSync(...)`.
  const hashedPassword = "Replace this with your code";

  // Store new user in database with hashed password
  const user = new User({ email, password: hashedPassword });
  user.save();

  res.json({
    data: {
      email: user.email,
    },
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Fetch user from database
  const user = User.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .send({ error: { message: "Invalid email or password" } });
  }

  // Check password
  // 🍎 Implement: 2.1. Instead of directly compare passwords,
  //    use `bcrypt.compareSync(...)` instead.
  const validPassword = user.password === password;
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

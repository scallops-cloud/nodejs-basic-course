/*
Content:
- Understand authentication and authorization
- understand basic authentication with username and password
- dotenv
- Validation with Joi/Express Validator
- the problem with storing passwords in plain text
- use bcrypt to hash passwords
- use bcrypt to compare passwords
- use JWT to generate token
- use JWT to verify token
- use JWT to decode token
- protect routes
- use JWT to store user roles

Ref:
https://www.codingthesmartway.com/how-to-add-basic-authentication-to-an-express-web-app/
*/

import express from "express";
import morgan from "morgan";
import "dotenv/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { User } from "./models/user.js";

const jwtSecretKey = process.env.JWT_SECRET_KEY;

const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login1", (req, res) => {
  const { username, password } = req.body;

  console.log(username, password);
  console.log(process.env.USERNAME);

  // 1. check if username and password is correct
  // 2. if correct, generate token
  // 3. send token back to client
  res.json({});
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  console.log(username, password);
  console.log(process.env.USERNAME);

  res.json({});
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Fetch user from database
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send("Invalid email or password");
  }

  // Check password
  // const validPassword = await bcrypt.compare(password, user.password);
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).send("Invalid email or password");
  }

  // Generate JWT
  // const token = jwt.sign({ id: user._id }, jwtSecretKey, {
  const token = jwt.sign({ id: email }, jwtSecretKey, {
    expiresIn: "1h",
  });

  res.send({ token });
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send("User already exists");
  }

  // Hash password
  // const hashedPassword = await bcrypt.hash(password, 10);
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);

  // Store new user in database
  const user = new User({ email, password: hashedPassword });
  await user.save();
  console.log({ email, password: hashedPassword });

  res.status(201).send("User registered");
});

function authenticate(req, res, next) {
  const token = req.header("Authorization");

  console.log(token);

  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }

  try {
    const decoded = jwt.verify(token, jwtSecretKey);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send("Invalid token.");
  }
}

// Protecting a route
app.get("/protected", authenticate, (req, res) => {
  console.log(req.user);
  res.send("This is a protected route");
});

app.get("/jwt", (req, res) => {
  const secret = crypto.randomBytes(32).toString("hex"); // This generates a 256-bit secret
  res.json({ secret });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import express from "express";
import { isValidName } from "./utils.js";
import morgan from "morgan";
import helmet from "helmet";

const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public"));

app.use(morgan("dev"));
app.use(helmet());

// user database variable here:
const userDatabase = {
  20: "Manee",
  21: "Mana",
  22: "Mano",
};

app.get("/users", (req, res) => {
  const users = Object.keys(userDatabase).map((id) => {
    return { id, name: userDatabase[id], petImageUrl: getPetImageUrl(id) };
  });

  res.json({ data: users });
});

app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const name = userDatabase[userId];

  if (!name) {
    res.status(404).json({
      error: {
        message: "User not found",
      },
    });
    return;
  }

  res.json({
    data: {
      id: userId,
      name,
      petImageUrl: getPetImageUrl(userId),
    },
  });
});

app.post("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const name = req.body.name;

  if (!userDatabase[userId]) {
    res.status(404).json({
      error: {
        message: "User not found",
      },
    });
    return;
  }

  if (!isValidName(name)) {
    res.status(404).json({
      error: {
        message: "The specified name is invalid",
      },
    });
    return;
  }

  userDatabase[userId] = name;

  res.json({
    data: {
      id: userId,
      name,
      petImageUrl: getPetImageUrl(userId),
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function getPetImageUrl(userId) {
  return `http://localhost:8000/images/pet-${userId}.jpg`;
}

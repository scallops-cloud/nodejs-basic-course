import express from "express";
import authRouter from "./routes/authRouter.js";
import postRouter from "./routes/postRouter.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const apiRouter = express.Router();
apiRouter.use("/", authRouter);
apiRouter.use("/", postRouter);

app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});

apiRouter.use("/", authRouter);
apiRouter.use("/", postRouter);

// app.use("/api", apiRouter);

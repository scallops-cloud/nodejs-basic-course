import express from "express";
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello my friends");
});

app.get("/about-us", (req, res) => {
  res.send("About Us");
});

app.get("/admin", (req, res) => {
  res.status(401).send("Admin only");
});

app.get("/home", (req, res) => {
  res.redirect("/about-us");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import { Router } from "express";

const router = Router();

router.get("/auth", (req, res) => {
  res.send("Auth ");
});

router.post("/login", (req, res) => {
  res.send("Login route");
});

export default router;

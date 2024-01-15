import { Router } from "express";

const router = Router();

router.get("/posts", (req, res) => {
  res.send("Posts");
});

router.get("/posts/:postId", (req, res) => {
  res.send("Post Detail");
});

export default router;

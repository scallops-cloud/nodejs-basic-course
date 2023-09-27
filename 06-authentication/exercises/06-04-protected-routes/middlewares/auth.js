import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const jwtSecretKey = process.env.JWT_SECRET_KEY;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: { message: "Unauthorized" } });
  }

  const token = authHeader.split(" ")[1]; // Get the token part after "Bearer"

  try {
    // 🍎 Implement: 2.1. Use `jwt.verify(...)` to verify the token.
    const decoded = "Replace this with your code";
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: { message: "Invalid token." } });
  }
};

# JWT Auth Middleware with protected routes

## Objective:

Understand the implementation and flow of JWT authentication middleware

## Exercises:

1. Use Postman to access `/public`, `/profile` and `/secret` without a token.

2. Auth middleware `middlewares/auth.js`

   - 2.1. Use `jwt.verify(...)` to verify the token.

3. Protected routes

   - 3.1. Use `auth` middleware in `GET /profile` and `GET /secret`.

4. Use Postman (without a token) to access `/public`, `/profile` and `/secret` again.

   - 4.1. What is the result?

5. Use Postman (with a token) to access `/public`, `/profile` and `/secret` again.

   - 5.1. What is the result? How is it different from 4.1?

## Challenges:

1. Question: Why we need the auth middleware?
2. Question: Can we use the same auth middleware for all routes?
3. Question: Why we need `try...catch` in the auth middleware?

# JWT Auth Middleware with protected routes

## Objective:

Understand the implementation and flow of JWT authentication middleware

## Setup

1. Copy `.env` from previous exercise (06-03) to `.../06-04-protected-routes/.env`.

2. Test `/signup` and `/login` with Postman.

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

6. Login and get the token from `/login`.

   - 6.1 Add token to Postman `Auth`, `type: Bearer Token`.
   - 6.1. Use the token to access `/profile` and `/secret` again.

## Challenges:

1. Question: Why we need the auth middleware?
2. Question: Can we use the same auth middleware for all routes?
3. Question: Why we need `try...catch` in the auth middleware?

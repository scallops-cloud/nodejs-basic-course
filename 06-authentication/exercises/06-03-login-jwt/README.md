# Generate JWT token for logging in

## Objective:

Understand the implementation and flow of JWT creation

## Exercises:

1. Install `dotenv` and import correctly.

2. Generate secure JWT secret for signing.

   - 2.1. Go to node console with command `node`.
   - 2.2. Use below script to generate a secure secret.

```
require('crypto').randomBytes(32).toString("hex");
```

3. Create `.env` file with the secret generated in 2.

```
JWT_SECRET_KEY=SECRET_HERE
```

4. Function `createJwt`

   - 4.1. Store the value from `process.env.JWT_SECRET_KEY` in .env to `jwtSecretKey`.
   - 4.2. Create a JWT with `jwt.sign(..)`. The token must expire in 3 hours.

5. Login Router `/login`

   - 5.1. Instead of `{"status": "ok"}`, return `{ token: "..." }` with JWT inside.

6. Test with postman to see the token result when login.

7. Go to [jwt.io](https://jwt.io/) and paste the token to see the decoded result. (Don't do this in production!)

## Challenges:

1. Question: Why we need `.env` and `dotenv`?
1. Question: Why we need the JWT secret key?

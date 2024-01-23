# Password hashing with Bcrypt

## Objective:

Understand the use of password hashing and how to use bcrypt.

## Exercises:

1. Signup Router `/signup`

   - 1.1. Instead of saving plain text password, hash it first with `bcrypt.hashSync(...)`.
   - 1.2. Test signup with Postman and see the data in `models/users.json`.

2. Login Router `/login`

   - 2.1. Instead of directly compare passwords, use `bcrypt.compareSync(...)` instead.

3. Test the result with Postman.

   - 3.1. See the data in `models/users.json`.
   - 3.2. How the result in `users.json` different from the previous exercise?

## Challenges:

1. Question: How storing hashed password better than plain text?
2. Question: Are bcrypt hashes the same for 2 same passwords?
3. Find and set the proper salt rounds for bcrypt.
   - Hint: The proper bcrypt will make the process time more than 250ms.

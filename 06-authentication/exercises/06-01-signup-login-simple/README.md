# Simple Signup & Login

## Objective:

Understand the basic flow of sending username & password.

## Exercises:

1. Create a new Postman collection.

   1.1. Setup POST request for `/signup` with `email` and `password`. (Use raw json body)

   1.2. Setup POST request for `/login` with the same body as above.

2. Signup Router `/signup`

   2.1. Retrieve `email` and `password` from request.

   2.2. If the user already exists, return 400 error with the message "user already exists".

   2.3. Return json in this format if successfully signup

```json
{
  "data": {
    "email": "email@sample.com"
  }
}
```

3. Login Router
   3.1. Retrieve `email` and `password` from request.

   3.2. If no user found, return 400 error with the message "Invalid email or password"

   3.3. check if password by comparing if input password and database user password are equal.

4. Test the result with Postman.

## Challenges:

1. Question: What is the problem with this implementation approach?
2. Question: Why don't we have the password confirmation field here?

# Express.js Request Logging

Learn to write the middleware to log the request

## Exercises:

1. Log each user request to the console.

   - Current time
   - request method
   - request url

2. Separate the logging middleware to the "middlewares" folder

## Hint:

- https://expressjs.com/en/guide/using-middleware.html

### Challenges:

1. Log the status code from the response

- Hint: Try to get the output which is not 200 to see if it is correct.

2. Log the duration spent in app processing before respond.

- Hint: Try to delay the respond with setTimeout to see if it is correct.

3. Question: Why logging status code and duration is different from others?

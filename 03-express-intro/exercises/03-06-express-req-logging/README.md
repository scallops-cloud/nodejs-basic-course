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

4. You might notice, the image file request are not in the logging. Please make it appear in the logging.

   - Hint: middlewares order is matter.
   - Question: Why making changes can make the logging for images appear?

## Link to slide:

https://snappify.com/view/da273be5-7ced-4a9a-93ce-fda4c2670e36

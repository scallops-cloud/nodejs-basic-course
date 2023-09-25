# Express.js Todo Website - Todo Add

Add a form to add new todo based on the existing logic in previous CLI implementation.

## Specs:

1. Todo Add API: To add a new todo

Sample Request:

```
POST http://localhost:8000/todos
```

Request Body:

```json
{
  "title": "Walk a dog"
}
```

Sample Response:

```json
{
  "data": {
    "id": 5,
    "title": "Walk a dog"
  }
}
```

2. If the todo length is longer than 30 characters, return error

- Also set the proper HTTP status code. (What code should it be?)

```
POST http://localhost:8000/todos
```

Request Body:

```json
{
  "title": "this is a very looooooooooooooooong todo"
}
```

Sample Response:

```json
{
  "error": {
    "message": "title must not exceed 30 characters"
  }
}
```

3. Add request logging and security enhancement in the middlewares

## Challenges:

1. Question: Why we use POST instead of GET to create a todo?

2. Question: Where should the error check logic is? app.js or todo.js?

3. Return the error if the todo title is shorter than 3 characters.

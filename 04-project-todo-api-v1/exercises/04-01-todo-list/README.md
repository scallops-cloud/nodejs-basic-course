# Express.js Todo API v1.0 - Todo List

Create a Todo API using an Express.js

## Specs:

1. Todo List API: Display the list of todos we have

- use `listTodos` function in `./models/todo.js`.

Sample Request:

```
GET http://localhost:8000/todos
```

Sample Response:

```json
{
  "data": [
    { "id": 1, "title": "Buy a book" },
    { "id": 2, "title": "Go to school" },
    { "id": 3, "title": "Dinner with the friends" },
    { "id": 4, "title": "Cook breakfast" }
  ]
}
```

2. Todo Detail API: Display the detail of one todo by ID.

- use `findTodo` function in `./models/todo.js`.

Sample Request:

```
GET http://localhost:8000/todos/2
```

Sample Response:

```json
{
  "data": {
    "id": 2,
    "title": "Go to school"
  }
}
```

## Challenges:

1. Question: What is the benefit of returning object under "data" field?

2. Todo Detail API Error: return 404 with error when id not found.

Sample Request:

```
GET http://localhost:8000/todos/9999
```

Sample Response:

(http status code: 404)

```json
{
  "error": {
    "message": "todo not found"
  }
}
```

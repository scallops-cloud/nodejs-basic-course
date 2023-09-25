# Express.js Todo API v1.0 - Todo List

Create a Todo API using an existing Todo CLI to convert to API version.

## Specs:

1. Todo List API: Display the list of todos we have.

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

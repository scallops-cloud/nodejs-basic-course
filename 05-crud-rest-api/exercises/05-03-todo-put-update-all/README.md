# Todo PUT API for updating all

## Objective:

- Understand the PUT API

## Exercise:

- Update Postman to have PUT method
- Implement PUT in router using `updateTodo` from model
- Handle error in case of the todo not found.

Request:

```
PUT /todos/2
```

Request Body:

```json
{
  "desc": "at 8:00"
}
```

Response:

```json
{
  "data": {
    "id": 2,
    "desc": "at 8:00"
  }
}
```

## Challenge:

- Question: How the `updateTodo` works?

## Link to slide:

https://snappify.com/view/888e678f-01de-43fd-a79c-e92ff9a07d97

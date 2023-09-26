# Todo PATCH API for partial updating

## Objective:

- Understand the PATCH API

## Exercise:

- Update Postman to have PATCH method
- Implement PATCH in router using `partialUpdateTodo` from model
- Handle error in case of the todo not found.

Request:

```
PATCH /todos/2
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
    "title": "Go to school",
    "desc": "at 8:00"
  }
}
```

## Challenge:

- Question: How the `partialUpdateTodo` works?
- Question: How the PUT different from PATCH?

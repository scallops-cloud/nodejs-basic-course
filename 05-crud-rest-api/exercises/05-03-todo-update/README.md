# Todo PUT API for updating all

## Objective:

- Understand the PUT API

## Exercise:

1. Update Postman to have PUT method
2. Implement update todo handler in `app.js`
3. Handle error in case of the todo not found.

Request:

```
PUT /todos/2
```

Request Body:

```json
{
  "description": "at 8:00"
}
```

Response:

```json
{
  "data": {
    "id": 2,
    "description": "at 8:00"
  }
}
```

## Challenge:

Prevent todo's ID from being able to update.

Request:
```
PUT /todos/2
```

Request body:
```json
{
  "id": 1
}
```

Should not update the 2nd todo's ID to 1.

## Link to slide:

https://snappify.com/view/888e678f-01de-43fd-a79c-e92ff9a07d97

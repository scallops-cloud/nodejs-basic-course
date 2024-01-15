# Todo API: Description field

## Objective:

Understand the flow of building REST API with Postman

## Exercises:

1. Update Postman "Create Todo" to have title and description.
2. Test Postman to see the result.
3. Implement create todo handler in `app.js`.
4. Try Postman "Create Todo" to see the result.
5. Check if the Postman "List Todos" have newly added todo.

Request:

```
POST /todos
```

Request Body:

```json
{
  "title": "Shopping for the food",
  "description": "at BigC"
}
```

Response:

```json
{
  "data": {
    "id": 4,
    "title": "Shopping for the food",
    "description": "at BigC"
  }
}
```

## Link to slide:

https://snappify.com/view/888e678f-01de-43fd-a79c-e92ff9a07d97

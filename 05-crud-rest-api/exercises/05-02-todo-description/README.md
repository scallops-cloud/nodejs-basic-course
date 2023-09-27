# Todo API: Description field

## Objective:

Understand the flow of building REST API with Postman

## Exercises:

1. Update Postman "Create Todo" to have description.
2. Test Postman to see the result.
3. Add new field for "desc" (description)
4. Try Postman "Create Todo" to see the result with description.
5. Check if the Postman "List Todos" have the description.

Request:

```
POST /todos
```

Request Body:

```json
{
  "title": "Shopping for the food",
  "desc": "at BigC"
}
```

Response:

```json
{
  "data": {
    "id": 4,
    "title": "Shopping for the food",
    "desc": "at BigC"
  }
}
```

## Link to slide:

https://snappify.com/view/888e678f-01de-43fd-a79c-e92ff9a07d97

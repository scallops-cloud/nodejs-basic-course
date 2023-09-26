# Todo DELETE API for deleting todo

## Objective:

- Understand the DELETE API

## Exercise:

- Update Postman to have DELETE method
- Implement DELETE in router using `deleteTodo` from model
- Handle error in case of the todo not found.

Request:

```
DELETE /todos/2
```

Response:

```json
{
  "data": {
    "id": 2,
    "title": "Go to school",
    "desc": ""
  }
}
```

## Challenge:

- Question: How the `deleteTodo` works?
- Question: is DELETE method good idea for using as a todo marking done?

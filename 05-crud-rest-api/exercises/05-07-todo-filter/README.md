# Todo Filter

## Objective:

Understand how to use query to filter data

## Exercise:

1. Update Postman to have "List By isDone" API.
2. Implement `filterTodosByDone` in `models/todo.js`
3. Update route to be able to List by isDone
4. Test List by isDone

Request:

```
GET /todos?isDone=true
```

Response:
List only Todo which `isDone` is `true`

```json
{
  "data": [
    {
      "id": 2,
      "title": "Go to school",
      "desc": "",
      "isDone": true
    }
  ]
}
```

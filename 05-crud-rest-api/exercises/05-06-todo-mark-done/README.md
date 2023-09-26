# Todo API for marking todo as done

## Objective:

Implement done for todo

## Exercises:

- Add new Postman request "Mark Todo as Done": PATCH with body `{ "isDone": true }`
- Update route to be able to PATCH update `isDone`
- Test Postman to see if it works.
- Check the result in "List Todo" if it works.

Request:

```
PATCH /todos/3
```

Request Body:

```json
{
  "isDone": true
}
```

Response:

```json
{
  "data": {
    "id": 3,
    "title": "Dinner with the friends",
    "desc": "",
    "isDone": true
  }
}
```

## Challenges:

- Why we use PATCH for marking as done, instead of PUT?

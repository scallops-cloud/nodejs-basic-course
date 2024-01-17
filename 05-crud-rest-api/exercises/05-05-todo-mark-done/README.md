# Todo API for marking todo as done

## Objective:

Implement mark todo as done

## Exercises:

- Add new Postman request "Mark Todo as Done": PATCH with body `{ "isDone": true }`
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
    "description": "",
    "isDone": true
  }
}
```

## Different between PUT and PATCH

PUT and PATCH are both used to update data on a server. PUT updates a whole
object, even if you only need to change a part of it. PATCH, on the other hand,
only updates the parts of the object that you specify. So, if you're only
changing a part of an object, PATCH can be more efficient.

## Link to slide:

https://snappify.com/view/888e678f-01de-43fd-a79c-e92ff9a07d97

# Todo Upload Images (Continue)

## Objective:

Understand how to manage the uploaded images data

## Exercise:

1. Create a new todoImage when uploading image.

Request:

```
POST /todos/3/uploads
```

Response:

```json
{
  "data": {
    "id": 2,
    "imagePath": "/uploads/eebe85b4-09e2-45ec-ae38-7c75c4ac2a2b.jpeg",
    "todoId": 3
  }
}
```

2. When getting todo detail, also return the list of todoImages.

Request:

```
GET /todos/3
```

Response:

```json
{
  "data": {
    "id": 3,
    "title": "Dinner with the friends",
    "desc": "",
    "isDone": false,
    "todoImages": [
      {
        "id": 1,
        "imagePath": "/uploads/c7e2714e-0c82-4810-b31b-85dd23375c6c.jpeg",
        "todoId": 3
      },
      {
        "id": 2,
        "imagePath": "/uploads/eebe85b4-09e2-45ec-ae38-7c75c4ac2a2b.jpeg",
        "todoId": 3
      }
    ]
  }
}
```

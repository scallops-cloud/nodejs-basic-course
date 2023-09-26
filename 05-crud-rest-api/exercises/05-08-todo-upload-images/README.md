# Todo Upload Images

## Objective:

Understand how to use multer to upload images

## Exercise:

1. Update Postman to have "Upload Todo Image" API.
2. Add new route to be able to upload image.
3. Save the image to the folder `./public/uploads`
4. Name the image with `uuidv4` to avoid conflict.
5. Return the image information to the client.
6. Ensure the image can be accessed by the client.

Request:

```
POST /todos/3/uploads
```

Request Body (use Postman Body > form-data > change key value to "File"):
![Postman upload file](docs/postman-upload-file.png)

Response

```json
{
  "data": {
    "id": 3,
    "imagePath": "/uploads/5d5bed77-4126-4438-b57c-9b5961446f18.jpeg",
    "todoId": 3
  }
}
```

## Documentation:

- https://expressjs.com/en/resources/middleware/multer.html
- https://www.npmjs.com/package/uuid

## Challenge:

1. Question: Why do we need to use uuidv4 to name the image?
2. Question: If not using uuidv4, what is the alternative?
3. Try to implement the alternative for file naming, not using uuidv4.

# Todo Upload Images

## Objective:

Understand how to use multer to upload images

### File upload

Web server file upload allows users to send files from their local machine to a
web server. This is commonly used for functionalities like uploading profile
pictures, attaching files to emails, or submitting documents.

Here's a step-by-step explanation of how web server file upload works:

```mermaid
sequenceDiagram
  participant Client
  participant Server

  Client->>Server: Send file upload request
  Server->>Client: Respond with upload form
  Client->>Server: Send file data

  rect rgb(200, 200, 200)
  note over Server: This is done by multer<br/>upload.single("image")
  Server->>Server: Process file upload
  Server->>Server: Save file to server
  end
  Server->>Server: Perform additional operations
  Server->>Client: Respond with file information
  Client->>Client: Display uploaded file
```

## Exercise:

1. Update Postman to have "Upload Todo Image" API
2. Modify code in route `/todos/:todoId/uploads`
3. Update todo imagePath

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
  }
}
```

## Documentation:

- https://expressjs.com/en/resources/middleware/multer.html
- https://www.npmjs.com/package/uuid

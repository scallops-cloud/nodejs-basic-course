# Todo API: Read

## Overview

In this exercise, we will initialize a Postman collection and test an already existing get and list API.

```mermaid
sequenceDiagram
   Actor Postman
   participant Todo API

   Postman->>+Todo API: GET /todos/1
   Todo API->>-Postman: Todo[1]
   Postman->>+Todo API: GET /todos
   Todo API->>-Postman: Todos[]
```

## Recap

Dive into the Express app, app.js and see how it works.

```mermaid
sequenceDiagram
   Actor Postman
   participant Todo API

   rect rgba(0, 0, 0, .1)
      Note right of Todo API: Initialize app<br/>line:4 const app = express()
      Note right of Todo API: Register middlewares<br/>line:18-19 app.use(...)
      Note right of Todo API: Register routes<br/>line:33-48 app.get(...)
      Note right of Todo API: Waiting for request on port 8000<br/>line:59 app.listen(port, ...)
   end

   Postman->>+Todo API: GET http://localhost:8000/todos/1
   Todo API->>Todo API: Run all middlewares<br/>1. Parse JSON<br/>2. Parse URL Encoded
   Todo API->>Todo API: Match route /todos/:todoId
   Todo API->>Todo API: Run route handler (req, res) => {...}
   Todo API->>-Postman: Todo[1]
```


### Middlewares

Middlewares are functions that run before the route handler. They are used to perform common tasks such as parsing the request body, validating the request, etc.

#### Parse JSON

```js
app.use(express.json());
```

This middleware parses the request body and populates the `req.body` property with the parsed JSON object. Only requests with `Content-Type: application/json` header will be parsed.

#### Parse URL Encoded

```js
app.use(express.urlencoded({ extended: true }));
```

This middleware parses the request body and populates the `req.body` property with the parsed URL encoded object. Only requests with `Content-Type: application/x-www-form-urlencoded` header will be parsed.

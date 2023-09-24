# Express.js JSON response

Render the JSON response instead of returning text

## Exercises:

1. User List: GET "http://localhost:8000/users"

   - Return the webpage with the JSON of user list
   - Display the list of all users with name and id, ex.

```json
{
  "data": [
    { "id": 20, "name": "Manee" },
    { "id": 21, "name": "Mana" },
    { "id": 22, "name": "Mano" }
  ]
}
```

2. User Detail page: GET "http://localhost:8000/users/20"

   - Return JSON for user detail.
   - Display the user id and name detail.

```json
{
  "data": {
    "id": 20,
    "name": "Manee"
  }
}
```

3. Update user detail with POST to "http://localhost:8000/users/20"
   - Once submit, the data is updated and return the JSON of updated data.

Request: `POST http://localhost:8000/users/20`
Body:

```json
{
  "name": "Manow"
}
```

Response:

```json
{
  "data": {
    "id": 20,
    "name": "Manow"
  }
}
```

4. In any case that the user ID is not found, return error with http status code 404.

Ex.
Request: `GET http://localhost:8000/users/9999`

Response:

```
{
  "error": {
    "message": "User not found"
  }
}
```

## Challenges:

1. Question: How returning JSON better than returning plain text?

2. If the name has symbol (ex. `-`, `?`), don't update data and return JSON of an error.

Request: `POST http://localhost:8000/users/20`
Body:

```json
{
  "name": "Invalid-name"
}
```

Response:

```json
{
  "error": {
    "message": "The specified name is invalid"
  }
}
```

3. For the error result, return the http status code that means the "Bad Request".

- Hint: check the http status code 4xx list

## Hint:

- https://expressjs.com/en/4x/api.html#res.json

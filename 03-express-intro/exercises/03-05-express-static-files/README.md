# Express.js Serving Static files

Allow the users to access static files like CSS or images.

## Exercises:

1. Try accessing the image from the server. `http://localhost:8000/images/pet-20.jpg`. Can you see the image?

2. Setup the static files serving to allow to access 3 images in `./public/images` with these URLs:

- http://localhost:8000/images/pet-20.jpg
- http://localhost:8000/images/pet-21.jpg
- http://localhost:8000/images/pet-22.jpg

2. When getting user detail, also return their pet image (image names follow the user id).

Ex.
Request: `GET http://localhost:8000/users/20`
Response:

```json
{
  "data": {
    "id": 20,
    "name": "Manee",
    "petImageUrl": "http://localhost:8000/images/pet-20.jpg"
  }
}
```

3. Update the user list to have the same result

Request: `GET http://localhost:8000/users`
Response:

```json
{
  "data": [
    {
      "id": 20,
      "name": "Manee",
      "petImageUrl": "http://localhost:8000/images/pet-20.jpg"
    },
    {
      "id": 21,
      "name": "Mana",
      "petImageUrl": "http://localhost:8000/images/pet-21.jpg"
    },
    {
      "id": 22,
      "name": "Mano",
      "petImageUrl": "http://localhost:8000/images/pet-22.jpg"
    }
  ]
}
```

4. Also update the Update API `POST http://localhost:8000/users/:userId` to return the `petImageUrl` as well.

### Challenges:

1. Why do we need to manually specify the folders to serve? Why aren't they served by default?

2. Try serving the static file under the files with the different path prefix "static"

   - Ex. "http://localhost:8000/static/images/cat.jpeg"

3. Update the "petImageUrl" to use the updated URL.

4. Can we make it that we update the URL in only one place instead of 3 places (detail, list and update)?

## Hint:

- https://expressjs.com/en/starter/static-files.html

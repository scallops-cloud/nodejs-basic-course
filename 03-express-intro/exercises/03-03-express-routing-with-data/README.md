# Express.js Routing with data

Connect the routing to the temporary database

## Exercises:

1. calling GET to "http://localhost:8000/users/20"

   - returns "User ID: 20 (name: Manee)".
   - for 21, returns "User ID: 21 (name: Mana)".

2. calling POST to "http://localhost:8000/users/20" with form (name = YOURNAME).

   - Returns "User ID: 20, name has been updated to YOURNAME".
   - Update the `userDatabase``, so that when get user id 20, the name is changed to YOURNAME.

3. if the userId not exists, return error

## Challenges:

1. Question: Why the data is gone after restarting the application?
2. Allow app to display and update the user age as well.

## Hint:

- Declare JavaScript object above the routing, with the key = id number, value = name.
- Update data in the object when POST

## Link to slide:

https://snappify.com/view/9a91cd83-009a-4501-8d94-7635874a267a

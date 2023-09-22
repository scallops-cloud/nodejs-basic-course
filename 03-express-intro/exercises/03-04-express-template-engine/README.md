# Express.js Template Engine

Render the html webpage with form instead of returning text

## Exercises:

1. User List page: GET "http://localhost:8000/users"

   - Return the webpage with the header "User List".
   - Display the list of all users with name and id, ex.
     • ID: 20 - Manee
     • ID: 21 - Mana
     • ID: 22 - Mano
   - Each item can be linked to the User Detail page

2. User Detail page: GET "http://localhost:8000/users/20"

   - Return webpage with header "User Title".
   - Display the user id and name detail.

3. User Detail page also display the form to update the name

   - Under the user detail, display the form for inputting name and submit button.

4. When submitting the form, it submits data with POST to "http://localhost:8000/users/20"
   - Once submit, the data is updated, and redirect users back to the detail page with updated data.

## Challenges:

1. If the name has symbol (ex. `-`, `?`), don't update data and display a error under the form with red color
   - Hint: Use query params to indicate if there is an error

## Hint:

- https://github.com/mde/ejs/wiki/Using-EJS-with-Express
- https://expressjs.com/en/guide/using-template-engines.html#using-template-engines-with-express

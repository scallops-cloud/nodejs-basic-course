# Express.js Todo Website - Todo Add

Add a form to add new todo based on the existing logic in previous CLI implementation.

![Todo App Screenshot - Add](docs/screenshot-todo-app-add.png)

![Todo App Screenshot - Error](docs/screenshot-todo-app-add.png)

## Specs:

1. Todo List: "http://localhost:8000/todos"

   - Under the todo list, display the form to add the new todo
   - When submit the new todo, call POST "http://localhost:8000/todos"
     with "title" = "TODO ITEM TITLE" to create a new todo.
   - If success, redirect back to the todo list page

2. If the todo length is longer than 30 characters, return error

   - When the router see the todo title longer than 30 characters,
     redirect to the todo list page without adding new item.
   - Redirect to "http://localhost:8000/todos?errorCode=too_long"
   - In the todo list page, convert error code "too_long" to the proper error message,
     ex. "The todo title must not exceed 30 characters."

3. Add request logging and security enhancement in the middlewares

## Challenges:

1. Question: Why we use POST instead of GET to create a todo?

2. Question: Why we use "error code" instead of "error message" in this exercise?

3. Question: Where should the error check logic is? app.js or utils.js?

4. If the todo length is shorter than 5 characters, return error code "too_short"

   - Display the understandable error message to the users.

5. If the error code is unknown, display error message "Invalid todo title".

6. Make the todo more beautiful with CSS and images.

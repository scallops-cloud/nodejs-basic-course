# Express.js Todo Website - Timestamp & new model

Add more detail to the todo item by updating whole model, view, controller

## Exercise:

1. Redesign the todo model to include the "id", "title", "description" and "createdAt" for each todo

   - No need to read write the file, create the global variables to store the todos.

2. Update the Todo List page to work with the new todo model.

3. Update the mark done to work.
   - Hint: use the todo id to reference to the correct todo.
   - Hint: add new todo property "isDone" to mark it as done.
4. Display the Created At after the todo title

## Challenges:

1. Why we replace "index" with Todo "ID" in the view?
2. Question: Can we still implement the todo detail without "ID"?
3. Format the created time to be more readable
4. Order the todos from new to old

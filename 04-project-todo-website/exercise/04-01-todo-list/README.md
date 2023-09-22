# Express.js Todo Website - Todo List

Create a Todo website using an existing Todo CLI to convert to web version.

![Todo App Screenshot](docs/screenshot-todo-app.png)

## Specs:

1. Todo List: "http://localhost:8000/todos"

   - Return the website with title "Todo App"
   - Display the list of todos we have with the number in front starting from 1.
   - Try adding todos to data.txt manually to see the result changed.

2. Done button:
   - For each todo item, there is a button "Done".
   - When click "Done", the website submits request to "http://localhost:8000/todos/NUMBER/done".
   - After finish updating, redirect to Todo List page.

## Challenges:

1. Question: What do you learn from this project?

2. New button at the bottom, "Show done items".

- When click, it navigates to "http://localhost:8000/todos?show_done=1".
- The button becomes "Hide done items".
- Display the list of done items under the list

3. Implement "Hide done items" in your understanding.

4. Make the todo more beautiful with CSS and images.

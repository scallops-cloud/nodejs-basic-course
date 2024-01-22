# Todo API: 👋 Todo

## Overview

Understand how we construct a DELETE request and perform a DELETE operation.

```mermaid
sequenceDiagram
  box Exercise
    Actor P AS Postman
    participant A AS Todo API (app.js)
  end
  box Data layer
    participant M AS Model (todo.mjs)
    participant D AS Storage<br/>(line 19: const todoDatabase)
  end

  P->>+A: DELETE /todos/2

  A->>+M: deleteTodo
  M->>+D: delete
  D->>-M: Todo[2]
  M->>-A: Todo[2] Deleted
  A->>-P: 200 ok
```

## Miscellanenous

### Deleting a JavaScript object property

In JavaScript, we can delete a property from an object using the `delete` keyword.

```js
const todo = {
  id: 1,
  title: 'Buy milk',
  completed: false,
};

delete todo.completed;

console.log(todo);
// { id: 1, title: 'Buy milk' }
```

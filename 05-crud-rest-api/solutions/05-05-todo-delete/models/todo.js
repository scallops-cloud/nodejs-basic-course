let nextId = 5;
let todoDatabase = [
  { id: 1, title: "Buy a book", desc: "" },
  { id: 2, title: "Go to school", desc: "" },
  { id: 3, title: "Dinner with the friends", desc: "" },
  { id: 4, title: "Cook breakfast", desc: "" },
];

export const listTodos = () => {
  // Implement logic here to list all todos
  return todoDatabase;
};

export const findTodo = (todoId) => {
  // Implement logic here to find a single todo by id
  return todoDatabase.find((todo) => todo.id === todoId);
};

export const createTodo = ({ title, desc }) => {
  // Implement logic here to create a new todo
  // 1. Create todo object with the new id from `nextId`
  const newTodo = { id: nextId, title, desc };
  // 2. Push the new todo object
  todoDatabase.push(newTodo);
  // 3. increment the `nextId`
  nextId++;
  // 4. return a new todo
  return newTodo;
};

export const updateTodo = ({ id, title, desc }) => {
  let updatedTodo = null;

  todoDatabase = todoDatabase.map((todo) => {
    // update the todo if match the id
    if (todo.id === id) {
      updatedTodo = { ...todo, title, desc };
      return updatedTodo;
    }
    return todo;
  });

  // return updatedTodo (it will be null if no todo updated)
  return updatedTodo;
};

export const partialUpdateTodo = ({ id, title, desc }) => {
  let updatedTodo = null;

  todoDatabase = todoDatabase.map((todo) => {
    // update the todo if match the id
    if (todo.id === id) {
      updatedTodo = { ...todo };

      if (title) {
        updatedTodo.title = title;
      }

      if (desc) {
        updatedTodo.desc = desc;
      }

      return updatedTodo;
    }
    return todo;
  });

  // return updatedTodo (it will be null if no todo updated)
  return updatedTodo;
};

export const deleteTodo = (todoId) => {
  // Implement logic here to delete a todo
  let deletedTodo = null;

  todoDatabase = todoDatabase.filter((todo) => {
    // delete the todo if match the id
    if (todo.id === todoId) {
      deletedTodo = todo;
      return false;
    }
    return true;
  });

  // return deletedTodo (it will be null if no todo deleted)
  return deletedTodo;
};

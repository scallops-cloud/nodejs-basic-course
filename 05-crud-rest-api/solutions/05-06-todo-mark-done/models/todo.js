let nextId = 5;

const todoDatabase = {
  1: { id: 1, title: "Buy a book", desc: "", isDone: false },
  2: { id: 2, title: "Go to school", desc: "", isDone: false },
  3: { id: 3, title: "Dinner with the friends", desc: "", isDone: false },
};

export const listTodos = () => {
  // Implement logic here to list all todos
  return Object.values(todoDatabase);
};

export const findTodo = (todoId) => {
  // Implement logic here to find a single todo by id
  return todoDatabase[todoId];
};

export const createTodo = ({ title, desc }) => {
  // Implement logic here to create a new todo
  // 1. Create todo object with the new id from `nextId`
  const newTodo = { id: nextId, title, desc, isDone: false };
  // 2. Add the new todo object
  todoDatabase[nextId] = newTodo;
  // 3. increment the `nextId`
  nextId++;
  // 4. return a new todo
  return newTodo;
};

export const updateTodo = ({ id, title, desc, isDone }) => {
  const todo = findTodo(id);

  if (!todo) {
    return null;
  }

  const updatedTodo = { ...todo, title, desc, isDone };
  todoDatabase[id] = updatedTodo;

  return updatedTodo;
};

export const partialUpdateTodo = ({ id, title, desc, isDone }) => {
  const todo = findTodo(id);

  if (!todo) {
    return null;
  }

  const updatedTodo = { ...todo };

  if (title) {
    updatedTodo.title = title;
  }

  if (desc) {
    updatedTodo.desc = desc;
  }

  if (isDone !== undefined) {
    updatedTodo.isDone = isDone;
  }

  todoDatabase[id] = updatedTodo;

  return updatedTodo;
};

export const deleteTodo = (todoId) => {
  // Implement logic here to delete a todo
  const todo = findTodo(todoId);

  if (!todo) {
    return null;
  }

  delete todoDatabase[todoId];

  return todo;
};

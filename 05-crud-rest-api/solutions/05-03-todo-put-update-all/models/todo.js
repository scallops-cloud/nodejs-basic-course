let nextId = 5;
const todoDatabase = [
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
  // 1. Get the todoIndex with findIndex
  const todoIndex = todoDatabase.findIndex((todo) => todo.id === id);

  // 2. if the todoIndex is not found (-1), return null
  if (todoIndex === -1) {
    return null;
  }

  // 3. Use index to reference the todo item in the todoDatabase (so we can change data)
  const todo = todoDatabase[todoIndex];

  // 4. update the todo data for title & desc with the new data
  todo.title = title;
  todo.desc = desc;

  // 5. return updated todo
  return todo;
};

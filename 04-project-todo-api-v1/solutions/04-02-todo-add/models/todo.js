let nextId = 5;
const todoDatabase = [
  { id: 1, title: "Buy a book" },
  { id: 2, title: "Go to school" },
  { id: 3, title: "Dinner with the friends" },
  { id: 4, title: "Cook breakfast" },
];

export const listTodos = () => {
  // Implement logic here to list all todos
  return todoDatabase;
};

export const findTodo = (todoId) => {
  // Implement logic here to find a single todo by id
  return todoDatabase.find((todo) => todo.id === todoId);
};

export const createTodo = ({ title }) => {
  // Implement logic here to create a new todo
  // 1. Create todo object with the new id from `nextId`
  const newTodo = { id: nextId, title };
  // 2. Push the new todo object
  todoDatabase.push(newTodo);
  // 3. increment the `nextId`
  nextId++;
  // 4. return a new todo
  return newTodo;
};

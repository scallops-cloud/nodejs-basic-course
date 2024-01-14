let nextId = 5;
const todoDatabase = {
  1: { id: 1, title: "Buy a book" },
  2: { id: 2, title: "Go to school" },
  3: { id: 3, title: "Dinner with the friends" },
};

export const listTodos = () => {
  return Object.values(todoDatabase);
};

export const findTodo = (todoId) => {
  return todoDatabase[todoId];
};

export const createTodo = ({ title }) => {
  // Exercise: accept a description and store it in the todoDatabase

  const todo = {
    id: nextId++,
    title,
  };

  todoDatabase.push(todo);

  return todo;
};

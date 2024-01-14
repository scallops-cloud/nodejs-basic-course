let nextId = 5;
const todoDatabase = [
  { id: 1, title: "Buy a book" },
  { id: 2, title: "Go to school" },
  { id: 3, title: "Dinner with the friends" },
  { id: 4, title: "Cook breakfast" },
];

export const listTodos = () => {
  return todoDatabase;
};

export const findTodo = (todoId) => {
  return todoDatabase.find((todo) => todo.id === todoId);
};

export const createTodo = ({ title }) => {
  const todo = {
    id: nextId++,
    title,
  };

  todoDatabase.push(todo);

  return todo;
};

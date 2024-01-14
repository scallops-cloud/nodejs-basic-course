let nextId = 5;
const todoDatabase = {
  1: { id: 1, title: "Buy a book", desc: "" },
  2: { id: 2, title: "Go to school", desc: "" },
  3: { id: 3, title: "Dinner with the friends", desc: "" },
};

export const listTodos = () => {
  return Object.values(todoDatabase);
};

export const findTodo = (todoId) => {
  return todoDatabase[todoId];
};

export const createTodo = ({ title, desc }) => {
  const todo = {
    id: nextId++,
    title,
    desc,
  };

  todoDatabase[todo.id] = todo;

  return todo;
};

export const updateTodo = ({ id, title, desc }) => {
  const todo = findTodo(id);

  if (!todo) {
    return null;
  }

  todo.title = title;
  todo.desc = desc;

  return todo;
};

let nextId = 1;

const todoImageDatabase = {
  // Sample data
  // 1: { id: 1, imagePath: "/public/uploads/aaa.jpeg", todoId: 1, size: 100 },
};

export const listTodoImages = () => {
  return Object.values(todoImageDatabase);
};

export const listTodoImagesByTodoId = (todoId) => {
  return Object.values(todoImageDatabase).filter((todoImage) => {
    return todoImage.todoId === todoId;
  });
};

export const createTodoImage = ({ imagePath, todoId, size }) => {
  const newTodoImage = { id: nextId, imagePath, todoId };
  todoImageDatabase[nextId] = newTodoImage;
  nextId++;
  return newTodoImage;
};

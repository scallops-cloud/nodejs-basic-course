/**
 * @typedef {Object} Todo
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {boolean} isDone
 * @property {string} [imagePath]
 */

/**
 * @typedef {Object} TodoAttributes
 * @property {string} title
 * @property {string} description
 * @property {boolean} isDone
 * @property {string} [imagePath]
 */

let nextId = 4;
const todoDatabase = {
  1: {
    id: 1,
    title: "Buy a book",
    description: "Buy a book about Node.js",
    isDone: false,
    imagePath: undefined,
  },
  2: {
    id: 2,
    title: "Go to school",
    description: "Go to school before 8 AM",
    isDone: false,
    imagePath: undefined,
  },
  3: {
    id: 3,
    title: "Dinner with friends",
    description: "Dinner with friends at 7 PM",
    isDone: false,
    imagePath: undefined,
  },
};

/**
 * @param {Array<(todo: Todo) => boolean>} [filters = []]
 * @returns {Todo[]}
 */
export const listTodo = (filters = []) => {
  let todos = Object.values(todoDatabase);
  for (const filter of filters) {
    todos = todos.filter(filter);
  }

  return todos;
};

/**
 *
 * @param {number} todoId
 * @returns {Todo}
 */
export const findTodo = (todoId) => {
  return todoDatabase[todoId];
};

/**
 *
 * @param {TodoAttributes} attributes
 * @returns {Todo}
 */
export const createTodo = (attributes) => {
  const defaultAttributes = {
    title: "",
    description: "",
    isDone: false,
    imagePath: undefined,
  };

  const todo = {
    ...defaultAttributes,
    ...attributes,
    id: nextId++,
  };

  todoDatabase[nextId] = todo;

  return todo;
};

/**
 *
 * @param {Todo} todo
 * @param {TodoAttributes} attributes
 * @returns {Todo}
 */
export const updateTodo = (id, attributes) => {
  const todo = findTodo(id);
  if (!todo) {
    return null;
  }

  /**
   * Bonus
   *
   * This code has a bug where caller can update the `id` of the todo.
   * In real world, we don't want to allow the caller to update the `id`.
   *
   * Fix the code so that the caller can't update todo's id. Or, even if they
   * try to update the id, it will be ignored.
   */
  const updatedTodo = (todoDatabase[id] = { ...todo, ...attributes });

  return updatedTodo;
};

/**
 *
 * @param {number} todoId
 * @returns {Todo}
 */
export const deleteTodo = (todoId) => {
  const todo = findTodo(todoId);
  if (!todo) {
    return null;
  }

  delete todoDatabase[todoId];

  return todo;
};

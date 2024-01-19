import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const fetchTodos = () => {
    axios.get("http://localhost:8000/todos").then((response) => {
      console.log("todos:", response.data);
      setTodos(response.data.data);
    });
  };

  const addTodo = (e) => {
    // prevent page refresh
    e.preventDefault();

    axios
      .post("http://localhost:8000/todos", {
        title: newTodo,
      })
      .then((response) => {
        console.log("created todo", response.data);
        setNewTodo("");
        fetchTodos();
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="max-w-lg mx-auto bg-white/90 shadow-lg rounded p-16 m-12 font-light">
      <div className="text-5xl text-center">Todo App</div>

      <form className="mt-12 flex space-x-2" onSubmit={addTodo}>
        <Input placeholder="Enter todo" value={newTodo} onChange={setNewTodo} />
        <Button label="Add" />
      </form>

      <div className="mt-8">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <TodoItem title={todo.title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="h-12 border border-slate-300 rounded px-5 py-2.5 me-2 mb-2 w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const Button = ({ label }) => {
  return (
    <button
      type="submit"
      className="h-12 text-white bg-slate-800 hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-300 rounded px-5 py-2.5 me-2 mb-2 w-24"
    >
      {label}
    </button>
  );
};

const TodoItem = ({ title }) => {
  return (
    <div class="flex items-center mb-4">
      • <div class="ml-2">{title}</div>
    </div>
  );
};

export default App;

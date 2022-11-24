import "./App.css";
import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";

const initialTodos = [
  { id: 1, description: "Hacer la compra", isDone: false },
  { id: 2, description: "Otro", isDone: false },

];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  const updateTodo = (id) => {
    const newTodos = [...todos];
    const todoToToggle = 
        newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoToToggle].isDone = !newTodos[todoToToggle].isDone;
    setTodos(newTodos);
  };
  const handleSubmit = (todo) => {
    const newTodo = {
      id: todos.at(-1).id + 1,
      description: todo,
      isDone: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div className="App">
      <h1>Lista de Pendientes</h1>
      <TodoList todos={todos} onToggle={updateTodo} />
      <TodoForm onSubmit={handleSubmit} />
    </div>
  );
}

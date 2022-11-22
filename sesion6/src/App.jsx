import "./App.css";
import { TodoList } from "./components/TodoList";
import { useState } from "react";

const initialTodos = [
  { id: 1, description: "Hacer la compra", isDone: true },
  { id: 2, description: "Terminar la tarea", isDone: true },
  { id: 3, description: "Pasear a Milo", isDone: true },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  const updateTodo= (id)=>{
    const newTodos = [...todos];
    const todoToToggle = newTodos.findIndex((todo)=>todo.id === id);
    newTodos[todoToToggle].isDone = !newTodos[todoToToggle].isDone;
    setTodos(newTodos);
  };

  return(
    <div className="App">
      <h1>Lista de Pendientes</h1>
      <TodoList todos={todos} onToggle={updateTodo} />
    </div>
  );
}
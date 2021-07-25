import React from "react";
import "./App.css";
import { TodoStore } from "./store";
import { TodoList } from "./ToDoList";

function App() {
  return (
    <div className="App">
      <TodoList todoStore={TodoStore} />
    </div>
  );
}

export default App;

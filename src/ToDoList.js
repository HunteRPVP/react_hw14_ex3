import { observer } from "mobx-react";
import React, { useState } from "react";

export const TodoList = observer(({ todoStore }) => {
  const [value, setValue] = useState("");
  const status = todoStore.status;

  return (
    <div>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          if (value) {
            todoStore.addTodo(value);
            setValue("");
          }
        }}
      >
        submit
      </button>

      <div>Completed: {status.completed}</div>
      <div>Remaining: {status.remaining}</div>

      <ul>
        {todoStore.todos.map((todo) => {
          return (
            <li
              key={todo.id}
              onClick={() => {
                todoStore.toggleTodo(todo.id);
              }}
            >
              [{todo.completed ? "x" : " "}] {todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

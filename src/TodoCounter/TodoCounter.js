import "./TodoCounter.css";
import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoCounter() {
  // Podemos consumir Context con useContext
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  if (totalTodos == 0) {
    return <h1 className="TodoCounter">No tienes ningún Todo Pendiente</h1>;
  }

  return completedTodos == totalTodos ? (
    <h1 className="TodoCounter">
      Felicidades, has completado <span>todos</span> los Todos
    </h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span>
      de <span>{totalTodos}</span> TODOS
    </h1>
  );
}

export { TodoCounter };

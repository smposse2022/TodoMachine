import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
  return (
    // Se emuló la misma estructura que el TodoItem
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text"></p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
}
export { TodosLoading };

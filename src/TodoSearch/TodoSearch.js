import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoSearch() {
  const { searchValue, setsearchValue } = React.useContext(TodoContext);

  return (
    <input
      placeholder="Busque el Todo deseado"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setsearchValue(event.target.value);
      }}
    />
  );
}
export { TodoSearch };

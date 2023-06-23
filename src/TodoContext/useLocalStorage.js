import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  // Creamos un estado de carga
  const [loading, setLoading] = React.useState(true);
  // Creamos un estado de error
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2500);
  }, []);

  const saveItem = (newItem) => {
    // Actualizar el localStorage
    localStorage.setItem(itemName, JSON.stringify(newItem));
    // Actualizar el state
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
/*
localStorage.removeItem("TODOS_V1");
const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de React.js", completed: false },
  { text: "Llorar con la Llorona", completed: false },
  { text: "Lalala", completed: false },
];

localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
*/

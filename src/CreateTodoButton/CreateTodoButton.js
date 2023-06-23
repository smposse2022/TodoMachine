import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal((openModal) => !openModal);
      }}
    >
      +
    </button>
  );
}
export { CreateTodoButton };

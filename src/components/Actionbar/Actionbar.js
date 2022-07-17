import "./Actionbar.css";

export default function Actionbar(props) {
  const clearCheckedTodosHandler = () => {
    const uncheckedTodos = props.todos.filter(
      (todo) => todo.isChecked === false
    );
    props.setTodos(uncheckedTodos);
  };

  return (
    <div className="Actionbar">
      <button class="deleteCheckedTodosBtn" onClick={clearCheckedTodosHandler}>
        Clear checked to-dos
      </button>
      <button
        className="deleteTodosBtn"
        onClick={() => {
          props.setTodos([]);
        }}
      >
        Delete all to-dos
      </button>
    </div>
  );
}

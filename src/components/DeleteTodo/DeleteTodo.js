import "./DeleteTodo.css";

export default function DeleteTodo(props) {
  return (
    <div
      className="DeleteTodo"
      onClick={() => {
        props.deleteSpecificTodo(props.todo.id);
      }}
    >
      <i>🗑️</i>
    </div>
  );
}

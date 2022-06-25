import "./Actionbar.css";

export default function Actionbar(props) {
  return (
    <div className="Actionbar">
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

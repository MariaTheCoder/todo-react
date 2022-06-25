import "./Actionbar.css";

export default function Actionbar(props) {
  return (
    <div className="Actionbar">
      <button
        onClick={() => {
          props.setTodos([]);
        }}
      >
        Delete all to-dos
      </button>
    </div>
  );
}

import "./EditButton.css";

export default function EditButton(props) {
  return (
    <div
      className="EditButton"
      onClick={() => {
        props.toggleInEditMode(props.todo.id);
      }}
    >
      <i>✏️</i>
    </div>
  );
}

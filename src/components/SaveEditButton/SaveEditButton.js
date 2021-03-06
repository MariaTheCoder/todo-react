export default function SaveEditButton(props) {
  return (
    <div
      className="SaveEditButton"
      onClick={() => {
        props.toggleInEditMode(props.todo.id);
        props.saveTodoEdit(props.todo.id);
      }}
    >
      <i>💾</i>
    </div>
  );
}

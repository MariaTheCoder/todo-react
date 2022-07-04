export default function CreateEditButton(props) {
  return (
    <div className="editButton" onClick={() => props.editTodo(props.todo.id)}>
      {props.todo.inEditMode ? <i>💾</i> : <i>✏️</i>}
    </div>
  );
}

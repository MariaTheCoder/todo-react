export default function CreateEditButton(props) {
  return (
    <div className="editButton" onClick={() => props.editTodo(props.todo.id)}>
      <i>✏️</i>
    </div>
  );
}

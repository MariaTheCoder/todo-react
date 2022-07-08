import "./ToDo.css";
import EditButton from "../EditButton/EditButton";
import SaveEditButton from "../SaveEditButton/SaveEditButton";

export default function ToDo(props) {
  const isEditable = props.todo.inEditMode;

  if (isEditable) {
    return (
      <li className="ToDo">
        <label>
          <input
            type="checkbox"
            onChange={() => props.checkTodo(props.todo.id)}
            id={props.todo.id}
            checked={props.todo.isChecked}
          />
          <input
            type="text"
            id={props.todo.id}
            defaultValue={props.todo.task}
            onChange={(event) => props.setTodoToEdit(event.target.value)}
          />
        </label>
        <SaveEditButton
          todo={props.todo}
          toggleInEditMode={props.toggleInEditMode}
          todoToEdit={props.todoToEdit}
          saveTodoEdit={props.saveTodoEdit}
        />
      </li>
    );
  }
  return (
    <li className="ToDo">
      <label>
        <input
          type="checkbox"
          onChange={() => props.checkTodo(props.todo.id)}
          id={props.todo.id}
          checked={props.todo.isChecked}
        />
        {props.todo.task}
      </label>
      <EditButton todo={props.todo} toggleInEditMode={props.toggleInEditMode} />
    </li>
  );
}

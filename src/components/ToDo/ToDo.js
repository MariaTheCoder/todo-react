import "./ToDo.css";
import CreateEditButton from "../EditButton/CreateEditButton";

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
          <input type="text" id={props.todo.id} value={props.todo.task} />
        </label>
        <CreateEditButton todo={props.todo} editTodo={props.editTodo} />
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
      <CreateEditButton todo={props.todo} editTodo={props.editTodo} />
    </li>
  );
}

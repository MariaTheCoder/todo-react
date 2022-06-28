import "./ToDo.css";

export default function ToDo(props) {
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
    </li>
  );
}

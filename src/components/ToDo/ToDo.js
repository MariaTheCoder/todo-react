import "./ToDo.css";

export default function ToDo(props) {
  const toggleIsChecked = () => {
    props.todo.isChecked = !props.todo.isChecked;
  };

  return (
    <li className="ToDo">
      <label>
        <input
          type="checkbox"
          onChange={toggleIsChecked}
          id={props.todo.id}
          value={props.todo.task}
        />
        {props.todo.task}
      </label>
    </li>
  );
}

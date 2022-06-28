import "./ToDo.css";

export default function ToDo(props) {
  const handleChange = () => {
    props.todo.isChecked = !props.todo.isChecked;
  };

  return (
    <li className="ToDo">
      <label>
        <input
          type="checkbox"
          onChange={handleChange}
          id={props.todo.id}
          value={props.todo.task}
        />
        {props.todo.task}
      </label>
    </li>
  );
}

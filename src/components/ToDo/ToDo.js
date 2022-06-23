import "./ToDo.css";

export default function ToDo(props) {
  return (
    <li className="ToDo">
      <label>
        <input type="checkbox" />
        {props.todo}
      </label>
    </li>
  );
}

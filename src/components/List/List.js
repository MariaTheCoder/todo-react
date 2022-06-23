import "./List.css";
import ToDo from "../ToDo/ToDo";

export default function List(props) {
  return (
    <div className="List">
      <h1>To-do List</h1>
      <ul>
        <ToDo todos={props.todos} />
      </ul>
    </div>
  );
}

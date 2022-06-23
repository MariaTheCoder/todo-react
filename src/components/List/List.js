import "./List.css";
import ToDo from "../ToDo/ToDo";

export default function List(props) {
  return (
    <div className="List">
      <h1>To-do List</h1>
      <div>
        {props.todos.map((todo, index) => (
          <ToDo key={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

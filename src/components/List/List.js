import "./List.css";
import ListItem from "../ListItem/ListItem";

export default function List(props) {
  return (
    <div className="List">
      <h1>To-do List</h1>
      <ul>
        <ListItem todos={props.todos} />
      </ul>
    </div>
  );
}

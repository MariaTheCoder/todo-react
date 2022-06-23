import "./List.css";
import ListItem from "../ListItem/ListItem";

export default function List(props) {
  return (
    <div className="List">
      <h1>I am a list. And here is your component: {props.todo}</h1>
      <ListItem todo={props.todo} />
    </div>
  );
}

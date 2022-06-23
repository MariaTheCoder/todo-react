// import { useState } from "react";
import "./ListItem.css";

export default function ListItem(props) {
  //   const [todo, setTodo] = useState("");

  return (
    <li className="ListItem">
      <label>
        <input type="checkbox" />
        {props.todos}
      </label>
    </li>
  );
}

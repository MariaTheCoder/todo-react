// import { useState } from "react";
import "./ListItem.css";

export default function ListItem(props) {
  //   const [todo, setTodo] = useState("");

  return (
    <div className="ListItem">
      <label>
        <input type="checkbox" />
        {props.todo}
      </label>
    </div>
  );
}

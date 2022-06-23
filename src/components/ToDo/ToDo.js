// import { useState } from "react";
import "./ToDo.css";

export default function ToDo(props) {
  //   const [todo, setTodo] = useState("");

  return (
    <li className="ToDo">
      <label>
        <input type="checkbox" />
        {props.todo}
      </label>
    </li>
  );
}

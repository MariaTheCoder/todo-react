// import { useState } from "react";
import "./ListComponent.css";

export default function ListComponent(props) {
  //   const [todo, setTodo] = useState("");

  return (
    <div className="ListComponent">
      <label>
        <input type="checkbox" />
        {props.todo}
      </label>
    </div>
  );
}

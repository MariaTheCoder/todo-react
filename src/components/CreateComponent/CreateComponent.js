import "./CreateComponent.css";
import { useState } from "react";

export default function CreateComponent(props) {
  const [tempTodo, setTempTodo] = useState("");

  return (
    <div className="CreateComponent">
      <input
        onChange={(event) => setTempTodo(event.target.value)}
        placeholder="new to-do"
        type="text"
      ></input>
      <button
        id="add_btn"
        onClick={() => {
          props.setTodo(tempTodo);
        }}
      >
        Add
      </button>
    </div>
  );
}

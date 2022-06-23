import "./CreateComponent.css";
import { useState } from "react";

export default function CreateComponent(props) {
  const [tempTodo, setTempTodo] = useState("");

  return (
    <div className="CreateComponent">
      <input
        className="input"
        onChange={(event) => setTempTodo(event.target.value)}
        placeholder="new to-do"
        type="text"
      ></input>
      <button
        className="button"
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

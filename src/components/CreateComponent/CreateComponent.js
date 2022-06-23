import "./CreateComponent.css";
import { useState } from "react";

export default function CreateComponent(props) {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="CreateComponent">
      <input
        className="input"
        onChange={(event) => setNewTodo(event.target.value)}
        placeholder="new to-do"
        type="text"
        value={newTodo}
      ></input>
      <button
        className="button"
        id="add_btn"
        onClick={() => {
          props.addTodo(newTodo);
          setNewTodo("");
        }}
      >
        Add
      </button>
    </div>
  );
}

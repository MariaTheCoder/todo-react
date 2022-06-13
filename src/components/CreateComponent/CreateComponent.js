import './CreateComponent.css';
import { useState } from "react";

export default function CreateComponent() {
  const [todo, setTodo] = useState("");

  return (
    <div className="CreateComponent">
      <input
        id="input_field"
        onChange={(event) => setTodo(event.target.value)}
        placeholder="new to-do"
        type="text"
      ></input>
      <button
        id="add_btn"
        onClick={() => {
          console.log(todo);
        }}
      >
        Add
      </button>
    </div>
  );
}

import "./CreateComponent.css";
import { useState } from "react";

export default function CreateComponent(props) {
  const [newTodo, setNewTodo] = useState({});

  return (
    <div className="CreateComponent">
      <input
        className="input"
        onChange={(event) =>
          setNewTodo({
            id: props.todos.length,
            task: event.target.value,
            isChecked: false,
          })
        }
        placeholder="new to-do"
        type="text"
        value={newTodo.task}
      ></input>
      <button
        className="button"
        id="add_btn"
        onClick={() => {
          props.addTodo(newTodo);
          setNewTodo({});
        }}
      >
        Add
      </button>
    </div>
  );
}

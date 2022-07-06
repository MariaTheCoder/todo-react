import "./ToDo.css";
import EditButton from "../EditButton/EditButton";
import SaveEditButton from "../SaveEditButton/SaveEditButton";
import { useState } from "react";

export default function ToDo(props) {
  const [editableTodo, setEditableTodo] = useState(props.todo.task);
  const [tempTodo, setTempTodo] = useState("");
  const isEditable = props.todo.inEditMode;

  if (isEditable) {
    return (
      <li className="ToDo">
        <label>
          <input
            type="checkbox"
            onChange={() => props.checkTodo(props.todo.id)}
            id={props.todo.id}
            checked={props.todo.isChecked}
          />
          <input
            type="text"
            id={props.todo.id}
            defaultValue={editableTodo}
            onChange={(event) => setTempTodo(event.target.value)}
          />
        </label>
        <SaveEditButton
          todo={props.todo}
          toggleInEditMode={props.toggleInEditMode}
        />
      </li>
    );
  }
  return (
    <li className="ToDo">
      <label>
        <input
          type="checkbox"
          onChange={() => props.checkTodo(props.todo.id)}
          id={props.todo.id}
          checked={props.todo.isChecked}
        />
        {props.todo.task}
      </label>
      <EditButton todo={props.todo} toggleInEditMode={props.toggleInEditMode} />
    </li>
  );
}

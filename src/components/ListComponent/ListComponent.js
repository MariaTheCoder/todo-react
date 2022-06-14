// import { useState } from "react";
import "./ListComponent.css";

export default function ListComponent(props) {
  //   const [todo, setTodo] = useState("");

  return (
    <div className="ListComponent">
      <h2>{props.todo}</h2>
    </div>
  );
}

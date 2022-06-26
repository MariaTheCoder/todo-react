import { useState } from "react";
import "./ToDo.css";

export default function ToDo(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
      console.log("I was checked");
      event.target.className = "Selected";
    } else {
      console.log("I was un-checked");
    }
    setIsChecked(!isChecked);
  };

  return (
    <li className={isChecked === true ? "ToDo Selected" : "ToDo"}>
      <label>
        <input type="checkbox" onChange={handleChange} />
        {props.todo}
      </label>
    </li>
  );
}

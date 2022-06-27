import { useState } from "react";
import "./styles.css";

export default function App() {
  const [arrayOfObjects, setArrayOfObjects] = useState([]);
  const [object, setObject] = useState({});

  return (
    <div className="App">
      <h1>Input something here</h1>
      <input
        placeholder="type in something"
        onChange={(event) => setObject({ text: event.target.value })}
      ></input>
      <button
        onClick={() => {
          setArrayOfObjects([...arrayOfObjects, object]);
        }}
      >
        Save
      </button>
      <h3>Did you type THIS?</h3>
      {arrayOfObjects.map((object) => (
        <h4>{object.text}</h4>
      ))}
    </div>
  );
}

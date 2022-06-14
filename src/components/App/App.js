import "./App.css";
import { useState } from "react";
import CreateComponent from "../CreateComponent/CreateComponent";
import ListComponent from "../ListComponent/ListComponent";

function App() {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <CreateComponent setTodo={setTodo} />
      <ListComponent todo={todo} />
    </div>
  );
}

export default App;

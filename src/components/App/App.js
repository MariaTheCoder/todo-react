import "./App.css";
import { useState } from "react";
import CreateComponent from "../CreateComponent/CreateComponent";
import List from "../List/List";
import Actionbar from "../Actionbar/Actionbar";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="App">
      <CreateComponent todos={todos} addTodo={addTodo} />
      <List todos={todos} />
      <Actionbar todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import CreateComponent from "../CreateComponent/CreateComponent";
import List from "../List/List";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="App">
      <CreateComponent addTodo={addTodo} />
      {/* <ToDo todo={todo} /> */}
      <List todos={todos} />
    </div>
  );
}

export default App;

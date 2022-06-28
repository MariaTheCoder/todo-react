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

  function checkTodo(id) {
    const newListOfTodos = [...todos];
    const foundTodo = newListOfTodos.find((todo) => todo.id === id);
    foundTodo.isChecked = !foundTodo.isChecked;

    setTodos(newListOfTodos);
  }

  return (
    <div className="App">
      <CreateComponent todos={todos} addTodo={addTodo} />
      <List todos={todos} checkTodo={checkTodo} />
      <Actionbar todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

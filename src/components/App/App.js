import "./App.css";
import { useState } from "react";
import CreateComponent from "../CreateComponent/CreateComponent";
import List from "../List/List";
import Actionbar from "../Actionbar/Actionbar";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState("");

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function checkTodo(id) {
    const newListOfTodos = [...todos];
    const foundTodo = newListOfTodos.find((todo) => todo.id === id);
    foundTodo.isChecked = !foundTodo.isChecked;

    setTodos(newListOfTodos);
  }

  function toggleInEditMode(id) {
    const newListOfTodos = [...todos];
    const foundTodo = newListOfTodos.find((todo) => todo.id === id);
    foundTodo.inEditMode = !foundTodo.inEditMode;

    setTodos(newListOfTodos);
  }

  function saveTodoEdit(id) {
    const newListOfTodos = [...todos];
    const foundTodo = newListOfTodos.find((todo) => todo.id === id);
    foundTodo.task = todoToEdit;

    setTodos(newListOfTodos);
  }

  function deleteSpecificTodo(id) {
    const newListOfTodos = [...todos];
    const indexOfFoundTodo = newListOfTodos.findIndex((todo) => todo.id === id);
    newListOfTodos.splice(indexOfFoundTodo, 1);

    setTodos(newListOfTodos);
  }

  return (
    <div className="App">
      <CreateComponent todos={todos} addTodo={addTodo} />
      <List
        todos={todos}
        checkTodo={checkTodo}
        toggleInEditMode={toggleInEditMode}
        todoToEdit={todoToEdit}
        setTodoToEdit={setTodoToEdit}
        saveTodoEdit={saveTodoEdit}
        deleteSpecificTodo={deleteSpecificTodo}
      />
      <Actionbar todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

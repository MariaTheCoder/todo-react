import { useState } from "react";
import "./App.css";
import CreateComponent from "../CreateComponent/CreateComponent";
import Notepad from "../Notepad/Notepad";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState("");
  const [inputHasChanged, setInputHasChanged] = useState(false);

  function addTodo(newTodo) {
    if (newTodo.task.length === 0) return alert("Please write a text");
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

    console.log(inputHasChanged);

    if (!inputHasChanged) return;
    foundTodo.task = todoToEdit;
    setTodos(newListOfTodos);
    setInputHasChanged(false);
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
      <Notepad
        todos={todos}
        checkTodo={checkTodo}
        toggleInEditMode={toggleInEditMode}
        todoToEdit={todoToEdit}
        setTodos={setTodos}
        setTodoToEdit={setTodoToEdit}
        saveTodoEdit={saveTodoEdit}
        deleteSpecificTodo={deleteSpecificTodo}
        setInputHasChanged={setInputHasChanged}
      />
    </div>
  );
}

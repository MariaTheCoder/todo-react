import List from "../List/List";
import Actionbar from "../Actionbar/Actionbar";

export default function Notepad(props) {
  return (
    <div className="Notepad">
      <List
        todos={props.todos}
        checkTodo={props.checkTodo}
        toggleInEditMode={props.toggleInEditMode}
        todoToEdit={props.todoToEdit}
        setTodoToEdit={props.setTodoToEdit}
        saveTodoEdit={props.saveTodoEdit}
        deleteSpecificTodo={props.deleteSpecificTodo}
        setInputHasChanged={props.setInputHasChanged}
      />
      <Actionbar todos={props.todos} setTodos={props.setTodos} />
    </div>
  );
}

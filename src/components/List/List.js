import "./List.css";
import ToDo from "../ToDo/ToDo";

export default function List(props) {
  return (
    <div className="List">
      <h1>To-do List</h1>
      <div className="line-large"></div>
      <div>
        {props.todos.map((todo, index) => (
          <ToDo
            key={index}
            todo={todo}
            checkTodo={props.checkTodo}
            toggleInEditMode={props.toggleInEditMode}
            todoToEdit={props.todoToEdit}
            setTodoToEdit={props.setTodoToEdit}
            saveTodoEdit={props.saveTodoEdit}
            deleteSpecificTodo={props.deleteSpecificTodo}
            setInputHasChanged={props.setInputHasChanged}
          />
        ))}
      </div>
    </div>
  );
}

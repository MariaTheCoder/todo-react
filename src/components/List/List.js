import "./List.css";
import ToDo from "../ToDo/ToDo";
import ListHeader from "../ListHeader/ListHeader";

export default function List(props) {
  return (
    <div className="List">
      <ListHeader />
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

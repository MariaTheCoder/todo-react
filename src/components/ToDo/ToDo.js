import "./ToDo.css";
import EditButton from "../EditButton/EditButton";
import SaveEditButton from "../SaveEditButton/SaveEditButton";
import DeleteTodo from "../DeleteTodo/DeleteTodo";

export default function ToDo(props) {
  const isEditable = props.todo.inEditMode;

  if (isEditable) {
    return (
      <li className="ToDo grid-container">
        <label>
          <input
            type="checkbox"
            onChange={() => props.checkTodo(props.todo.id)}
            id={props.todo.id}
            checked={props.todo.isChecked}
          />
          <input
            class="correct-todo"
            type="text"
            id={props.todo.id}
            defaultValue={props.todo.task}
            onChange={(event) => {
              props.setTodoToEdit(event.target.value);
              props.setInputHasChanged(true);
            }}
          />
        </label>
        <SaveEditButton
          todo={props.todo}
          toggleInEditMode={props.toggleInEditMode}
          todoToEdit={props.todoToEdit}
          saveTodoEdit={props.saveTodoEdit}
        />
        <DeleteTodo
          todo={props.todo}
          deleteSpecificTodo={props.deleteSpecificTodo}
        />
      </li>
    );
  }
  return (
    <>
      <li className="ToDo grid-container">
        <label class="todo-container">
          <input
            type="checkbox"
            onChange={() => props.checkTodo(props.todo.id)}
            id={props.todo.id}
            checked={props.todo.isChecked}
          />
          {props.todo.task}
        </label>
        <EditButton
          todo={props.todo}
          toggleInEditMode={props.toggleInEditMode}
        />
        <DeleteTodo
          todo={props.todo}
          deleteSpecificTodo={props.deleteSpecificTodo}
        />
      </li>
      <div className="line-small"></div>
    </>
  );
}

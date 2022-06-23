import "./App.css";
import { useState } from "react";
import CreateComponent from "../CreateComponent/CreateComponent";
import List from "../List/List";

function App() {
  const [todo, setTodo] = useState("");

  return (
    <div className="App">
      <CreateComponent setTodo={setTodo} />
      {/* <ListItem todo={todo} /> */}
      <List todo={todo} />
    </div>
  );
}

export default App;

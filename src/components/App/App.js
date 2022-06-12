import "./App.css";
import Greeting from "../Greeting/Greeting";
import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("Hello, I was passed as a message!");

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          onChange={(event) => {
            setMsg(event.target.value);
          }}
        ></input>
        <Greeting msg={msg} />
      </header>
    </div>
  );
}

export default App;

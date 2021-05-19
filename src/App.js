import react from "react";
import "./App.css";
import ListTask from "./Components/ListTask";
import AddTask from "./Components/Addtask";

function App() {
  return (
    <div className="App">
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;

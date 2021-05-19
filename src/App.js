import react from "react";
import "./App.css";
import Tasks from "./Components/Tasks";

import AddTask from "./Components/Addtask";
import StatusTasks from "./Components/StatusTask";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="App">
      <AddTask />
      <Tasks />
      <StatusTasks />
    </div>
  );
}

export default App;

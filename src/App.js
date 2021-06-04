import "./App.css";
import AddTask from "./Components/Addtask";
import StatusTasks from "./Components/StatusTask";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="grid-container">
      
      <AddTask />
      <TaskList />

      <StatusTasks />
    </div>
  );
}

export default App;

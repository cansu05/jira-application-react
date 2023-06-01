import { useEffect, useContext } from "react";
import "./App.css";
import TaskCreate from "./companent/TaskCreate";
import TaskList from "./companent/TaskList";
import TasksContext  from "./context/task";

function App() {
  const {fetchTasks} = useContext(TasksContext);
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <TaskCreate />
      <h1 className="app-title">Görevler</h1>
      <TaskList />
    </div>
  );
}

export default App;

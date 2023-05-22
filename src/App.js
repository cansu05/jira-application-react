import "./App.css";
import TaskCreate from "./companent/TaskCreate";
import TaskList from "./companent/TaskList";

function App() {
  return <div className="App">
    <TaskCreate />
    <h1>Görevler</h1>
    <TaskList />
  </div>;
}

export default App;

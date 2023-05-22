import { useState } from "react";
import "./App.css";
import TaskCreate from "./companent/TaskCreate";
import TaskList from "./companent/TaskList";

function App() {
  const [tasks,setTasks] = useState([])
  const createTask = (title, taskdescription) => {
    const createdTasks = [
      ...tasks,{
        id:Math.round(Math.random()*999999),
        title:title,
        taskdescription:taskdescription,
      }
    ];

    setTasks(createdTasks);
  };
  return <div className="App">
    <TaskCreate onCreate={createTask}/>
    <h1>Görevler</h1>
    <TaskList tasks={tasks} />
  </div>;
}

export default App;

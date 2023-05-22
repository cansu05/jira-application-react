import { useState } from "react";
import "./App.css";
import TaskCreate from "./companent/TaskCreate";
import TaskList from "./companent/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskdescription) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title: title,
        taskdescription: taskdescription,
      },
    ];

    setTasks(createdTasks);
  };

  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1 className="app-title">Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} />
    </div>
  );
}

export default App;

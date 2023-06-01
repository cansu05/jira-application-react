import TasksShow from "./TasksShow";
import TasksContext from "../context/task";
import { useContext } from "react";

const TaskList = () => {
  const { tasks } = useContext(TasksContext);
  return (
    <div className="task-list-wrapper">
      {tasks.map((task, index) => {
        return <TasksShow key={index} task={task} />;
      })}
    </div>
  );
};

export default TaskList;

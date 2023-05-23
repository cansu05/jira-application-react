import { useState } from "react";
import "./TasksShow.css";
import TaskCreate from "./TaskCreate";
import TasksContext from "../context/task";
import { useContext } from "react";

const TasksShow = ({ task }) => {
  const { editTaskById, deleteTaskById } = useContext(TasksContext);

  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    deleteTaskById(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDescription) => {
    setShowEdit(false);
    editTaskById(id, updatedTitle, updatedTaskDescription);
  };
  return (
    <div className="tasks-show-container">
      <div className="tasks-show-wrapper">
        {showEdit ? (
          <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/>
        ) : (
          <div>
            <h3 className="tasks-show-title">Your Mission</h3>
            <p className="tasks-show-p">{task.title}</p>
            <h3 className="tasks-show-title">To Do</h3>
            <p className="tasks-show-p">{task.taskDescription}</p>
            <div className="tasks-show-button">
              <button
                className="tasks-show-delete-button"
                onClick={handleDeleteClick}
              >
                Delete
              </button>
              <button
                className="tasks-show-update-button"
                onClick={handleEditClick}
              >
                Update
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksShow;

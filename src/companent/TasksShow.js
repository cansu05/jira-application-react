import { useState } from "react";
import "./TasksShow.css";
import TaskCreate from "./TaskCreate";

const TasksShow = ({ task, onDelete,onUpdate }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id,updatedTitle,updatedTaskDescription) => {
    setShowEdit(false);
    onUpdate(id,updatedTitle,updatedTaskDescription);
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

import { useState } from "react";
import "./TaskCreate.css";

const TaskCreate = ({ onCreate, task, taskFormUpdate, onUpdate }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDescription, setTaskDescription] = useState(
    task ? task.taskDescription : ""
  );

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDescription(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDescription);
    } else {
      onCreate(title, taskDescription);
    }

    setTitle("");
    setTaskDescription("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="edit-task-create-form-container">
          <form className="edit-task-create-form-wrapper">
            <h3 className="edit-task-create-title">Edit Task</h3>
            <label className="edit-task-create-label">Edit Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="edit-task-create-input"
            />
            <label className="edit-task-create-label">Edit Task</label>
            <textarea
              value={taskDescription}
              onChange={handleTaskChange}
              className="edit-task-create-textarea"
              rows={5}
            />
            <button className="edit-task-create-button" onClick={handleSubmit}>
              Edit Task
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create-form-container">
          <form className="task-create-form-wrapper">
            <h3 className="task-create-title">Add Task</h3>
            <label className="task-create-label">Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-create-input"
            />
            <label className="task-create-label">Enter Task</label>
            <textarea
              value={taskDescription}
              onChange={handleTaskChange}
              className="task-create-textarea"
              rows={5}
            />
            <button className="task-create-button" onClick={handleSubmit}>
              Create Task
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskCreate;

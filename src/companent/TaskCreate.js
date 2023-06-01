import { useState } from "react";
import "./TaskCreate.css";

const TaskCreate = ({onCreate}) => {
  const [title, setTitle] = useState("");
  const [taskdescription, setTaskDescription] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDescription(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault()
    onCreate(title,taskdescription)
    setTitle('')
    setTaskDescription('')
  };
  
  return (
    <>
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
            value={taskdescription}
            onChange={handleTaskChange}
            className="task-create-textarea"
            rows={5}
          />
          <button className="task-create-button" onClick={handleSubmit}>Create Task</button>
        </form>
      </div>
    </>
  );
};

export default TaskCreate;

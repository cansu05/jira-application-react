import './TasksShow.css'

const TasksShow = ({ task,onDelete }) => {
    const handleDeleteClick = () => {
        onDelete(task.id);
    }
  return (
    <div className="tasks-show-container">
      <div className="tasks-show-wrapper">
        <h3 className="tasks-show-title">Your Mission</h3>
        <p className="tasks-show-p">{task.title}</p>
        <h3 className="tasks-show-title">To Do</h3>
        <p className="tasks-show-p">{task.taskdescription}</p>
        <div className='tasks-show-button'>
          <button className="tasks-show-delete-button" onClick={handleDeleteClick}>Delete</button>
          <button className="tasks-show-update-button">Update</button>
        </div>
      </div>
    </div>
  );
};

export default TasksShow;

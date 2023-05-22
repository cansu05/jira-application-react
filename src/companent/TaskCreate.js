import './TaskCreate.css'

const TaskCreate = () => {
  return (
    <>
      <div className='task-create-form-container'>
        
        <form className="task-create-form-wrapper">
        <h3 className='task-create-title'>Add Task</h3>
          <label className='task-create-label'>Title</label>
          <input className='task-create-input' />
          <label className='task-create-label'>Enter Task</label>
          <textarea className='task-create-textarea' rows={5} />
          <button className='task-create-button'>Create Task</button>
        </form>
      </div>
    </>
  );
};

export default TaskCreate;

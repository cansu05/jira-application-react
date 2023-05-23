import TasksShow from './TasksShow'

const TaskList = ({tasks, onDelete,onUpdate}) => {
  return (
    <div className='task-list-wrapper'>
      {tasks.map((task,index) => {
        return (
          <TasksShow key={index} task={task} onDelete={onDelete} onUpdate={onUpdate}/>
        )
      })}
    </div>
  )
}

export default TaskList
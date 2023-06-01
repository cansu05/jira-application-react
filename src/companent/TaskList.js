import TasksShow from './TasksShow'

const TaskList = ({tasks, onDelete}) => {
  return (
    <div className='task-list-wrapper'>
      {tasks.map((task,index) => {
        return (
          <TasksShow key={index} task={task} onDelete={onDelete}/>
        )
      })}
    </div>
  )
}

export default TaskList
import TasksShow from './TasksShow'

const TaskList = ({tasks}) => {
  return (
    <div>
      {tasks.map((task,index) => {
        return (
          <TasksShow key={index} task={task} />
        )
      })}
    </div>
  )
}

export default TaskList
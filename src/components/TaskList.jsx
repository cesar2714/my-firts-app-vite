import TaskCard from './TaskCard'

// ↓↓Agrego task estructurado {}
function TaskList({task}) {
    

  if(task.length === 0){
      return <h1>No hay tareas aún</h1>
  }

return (
  <div>
    {task.map((task) => (
      <TaskCard key={task.id} task={task} />   
      
    ))}
  </div>
);
}

export default TaskList

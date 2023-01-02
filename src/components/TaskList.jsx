import TaskCard from './TaskCard'

// ↓↓Agrego task estructurado {}
function TaskList({task, deleteTask}) {
    

  if(task.length === 0){
      return <h1>No hay tareas aún</h1>
  }

return (
  <div>
    {task.map((task) => (
      <TaskCard key={task.id} task={task} deleteTask={deleteTask} />   
      
    ))}
  </div>
);
}

export default TaskList

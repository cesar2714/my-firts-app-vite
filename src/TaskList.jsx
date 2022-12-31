
// ↓↓Agrego task estructurado {}
function TaskList({task}) {
    

    if(task.length === 0){
        return <h1>No hay tareas aún</h1>
    }

  return (
    <div>
      {task.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description} </p>
        </div>
      ))}
    </div>
  );
}

export default TaskList

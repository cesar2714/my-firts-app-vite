import { useState } from "react";

function TaskForm({createTask}) {

const [title, setTitle] = useState('')

const handleSubmit= (e) => {
    e.preventDefault();
    createTask(title)
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm
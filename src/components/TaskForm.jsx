import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'


function TaskForm() {

const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const {createTask} = useContext(TaskContext)


const handleSubmit= (e) => {
  e.preventDefault();
  createTask({ title, description });
  setTitle("");
  setDescription("");
}


  return (
    <div className=" max-w-md mx-auto ">
      <form onSubmit={handleSubmit} className=" bg-slate-600 p-10 mb-4 ">
        <h1 className=" text-3xl font-bold text-white mb-3 ">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-200 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-200 w-full mb-2"
        ></textarea>
        <button className=" bg-yellow-400 px-3 py-1 hover:bg-yellow-300">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm
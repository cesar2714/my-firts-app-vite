import React from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

//↓↓↓ Igual este para que funcione (por la palabra -data-)
import { task as data } from "./components/task";
import { useEffect, useState } from "react";
//↑↑↑

function App() {

//Para poder que App lea y se puedan acceder datos, tenemos que traer este desde TaskList nos traemos este bloque de código desde TaskList -- Así lo igualamos a nivel de App

  const [task, setTask] = useState([])

  useEffect(() => {
    setTask(data);
  }, []);

// ↑↑↑↑ Bloque de código desde TaskList

//Para poder introducir datos a la lista de tareas, tenemos que crear la función que lo permita ↓↓↓ Esta la vamos a agregar de último a TaskForm para poder enlazar

function createTask (data) {
  setTask([...task, {
    title: data.title,
    id: task.length,
    description: data.description
  }])
}

function deleteTask (taskId) {
  setTask(task.filter(task => task.id !== taskId)
  )
}

//↑↑↑
  return (
    <div>
      <TaskForm createTask={createTask} />
      <TaskList task={task} deleteTask={deleteTask}/>
    </div>
  )
}

export default App

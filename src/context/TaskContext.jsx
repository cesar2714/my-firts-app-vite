import {createContext, useState, useEffect} from 'react'
import { task as data } from "../components/task";

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [task, setTask] = useState([])

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

  useEffect(() => {
    setTask(data);
  }, []);

  return (
  <TaskContext.Provider value={{
    task: task,
    deleteTask: deleteTask,
    createTask: createTask
  }} >           
     {props.children} 
  </TaskContext.Provider>
  )
}


import {createContex, createContext} from 'react'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  let x=20

  return (
  <TaskContext.Provider>           
     {props.children} 
  </TaskContext.Provider>
  )
}


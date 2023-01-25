import React from 'react'
import { Newtask } from './Newtask' 


export const Task = ({tasks,onDelete,onToggle}) => {
  
  return (
    <>
      {tasks.map((task) => ( 
      <Newtask key={task.id} task={task}
      onDelete = {onDelete}
      onToggle= {onToggle}
      />
      
      )
      )};  
    </>
  )
}

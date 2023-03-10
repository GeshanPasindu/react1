import React from 'react'
import {FaTimes} from 'react-icons/fa'


export const Newtask = ({task,onDelete,onToggle}) => {
  return (
    <div className= {`task ${task.reminder ?'reminder ':'' }`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text}
        <FaTimes onClick={() => onDelete(task.id)} />
        </h3>
        <p>{task.day}</p>

    </div>
  )
} 
 
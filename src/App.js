
 import './index.css';
import React from "react";
// import Component1, { Component2, Para } from "./components/Component1";
import Header from "./components/Header";
import { Task } from './components/Task';
import { Addtask } from './components/Addtask';
import { useState } from 'react'

function App() {
  const [showAddTask,setShowAddTask] =useState(false)
  const[tasks,setTasks] = useState([ {
    id: 1,
    text: 'Doctors Appointment',
    day: 'jan 4th ',
    reminder: true,
  },
  {
    id: 2,
    text: 'Collage meeting',
    day: 'jan 8th ',
    reminder: true,
  },
  {
    id: 3,
    text: 'Pay bills',
    day: 'jan 15th ',
    reminder: false,
  }])

  // add tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000)+1
    const newTask = {id, ...task}
  setTasks([...tasks,newTask])
  }

  // delete
  const deleteTask =(id) =>{
   setTasks(tasks.filter((task) =>task.id !== id))
   
  }

  // toggle remainder
  const toggleReaminder = (id) =>{
     setTasks(tasks.map((task) => task.id === id
     ? {...task,reminder: !task.reminder}:task))
  }

  return (
    <div className='container'>
    
      {/* <Component1/>
      <Component2/>
      <Para/> */}
      <Header title={'Task Manager'} onAdd ={() => setShowAddTask(!showAddTask)} show = {showAddTask}/>
     {showAddTask && <Addtask onAdd ={addTask} />}
     { tasks.length > 0 ? 
     (<Task tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReaminder}/>)  :('no Task to show')
     
     }
    </div>
  );
}
// class App extends React.Component{
//   render(){
//     return(
//       <h1>this is a class</h1>
//     )
//   }
// }

 export default App;


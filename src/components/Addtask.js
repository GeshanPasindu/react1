import { useState } from "react"

export const Addtask = ({onAdd,}) => {
    const[text,setText] = useState('')
    const[date,setDate] = useState('')
    const[reminder,setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('please add a task')
        }

        onAdd({text,date,reminder})

        setText('')
        setDate('')
        setReminder(false)

    }

  return (
   <form className='add-form' onSubmit = {onSubmit}>
    <div className='form-control'>
        <label>Task</label>
        <input type= 'text' placeholder='add task'
        value={text}
        onChange= {(e) => setText(e.target.value)}/>

    </div>

    <div className='form-control'>
        <label>Date</label>
        <input type='text' placeholder='add date'
        value={date}
        onChange= {(e) => setDate(e.target.value)}/>

    </div>

    <div className='form-control form-control-check'>
        <label>Reminder</label>
        <input type='checkbox' 
        checked ={reminder}
        value={reminder}
        onChange= {(e) => setReminder(e.currentTarget.checked)}/>

    </div>
    <input type='submit' value = 'save task' className='btn btn-block'/>
   </form>
  )
}

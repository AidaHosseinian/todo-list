import React, { useState } from "react";
import './todo.scss';

function TodoForm({addTodo}) {
    const [value , setValue] = useState("")

    const handleChange =(e) => {
        setValue(e.target.value)
    }

    const handleAddTask =(e) => {
        e.preventDefault()
        addTodo(value)
        setValue("")
    }
     
    return (<form onSubmit={handleAddTask}>
        <input 
            type="search"
            placeholder="What is your Tasks Today?"
            value={value}
            onChange={handleChange}
        />
        <button className="task-submit">Add Task</button>
    </form>
)}

export default TodoForm;
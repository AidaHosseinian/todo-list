import React, { useState } from "react";
import './todo.scss';

function TodoForm() {
    const [value , setValue] = useState("")

    const handleChange =(e) => {
        setValue(e.target.value)
    }
    const handleSubmit =(e) => {
        console.log(value)
    }
     
    return (<form onSubmit={handleSubmit}>
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
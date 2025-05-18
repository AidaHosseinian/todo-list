import React, { useState } from "react";
import './todo.scss';
import {addTodo} from "../store/reducer.js";
import { useStore } from "../store/store.js";

function TodoForm() {
    const [store, dispatch] = useStore();
    const [value, setValue] = useState('');

    const handleChange =(e) => {
        setValue(e.target.value)
    }

    const handleAddTask =(e) => {
        e.preventDefault()
        dispatch(addTodo(value))
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
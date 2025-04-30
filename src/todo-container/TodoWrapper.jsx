import React,{useState} from "react";
import './todo.scss';
import TodoForm from "./TodoForm.jsx";


function TodoWrapper() {
   
     
    return (<div className="todo-wrapper">   
        <div className="todo-task-bar"> 
            <TodoForm />
        </div>
    </div>
)}

export default TodoWrapper;






import React,{useState} from "react";
import './todo.scss';
import TodoForm from "./TodoForm.jsx";
import TodoItem from "./TodoItem.jsx";
import { useStore } from "../store/store";
import {addTodo} from "../store/reducer";



function TodoWrapper({todo}) {
   const [store, dispatch] = useStore();
     
    return (<div className="todo-wrapper">   
        <div className="todo-task-bar"> 
            <TodoForm />
            
            <ul className="todo-list">
                {store.todoList.map(todo => <TodoItem 
                {...todo} 
                key={todo.id}
                />)}
            </ul>
        </div>
    </div>
)}

export default TodoWrapper;






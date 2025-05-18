import React,{useState} from "react";
import './todo.scss';
import TodoForm from "./TodoForm.jsx";
import TodoItem from "./TodoItem.jsx";
import { useStore } from "../store/store";
import {addTodo} from "../store/reducer";



function TodoWrapper({todo}) {
   //const[todoList, setTodoList]= useState([])
   const [store, dispatch] = useStore();

//    const handleAddTodo = () => {
//     dispatch(addTodo({
//         id: (((1+Math.random())*0x10000)|0).toString(16).substring(1),
//         task: todo,
//         isComplete: false,
//         isEdit: false
//     }))
//    }
//    console.log(todo)
//   /*  const addTodo =(todoTxt) => {
//     setTodoList([...todoList, {
//         id: (((1+Math.random())*0x10000)|0).toString(16).substring(1),
//         task: todoTxt,
//         isComplete: false,
//         isEdit: false
//     }])
//    } */

//    const handleComplete = (id)=> {
//     setTodoList([...todoList.map(todo => todo.id === id ? {...todo, isComplete: !todo.isComplete} : todo)])
//    }

//   

//    const handleEdit = (id, newTask)=> {
//     setTodoList([...todoList.map(todo => todo.id === id ? {...todo, task: newTask} : todo)])
//    }
     
    return (<div className="todo-wrapper">   
        <div className="todo-task-bar"> 
            <TodoForm />
            
            <ul className="todo-list">
                {store.todoList.map(todo => <TodoItem 
                {...todo} 
                key={todo.id}
                // onComplete={handleComplete}
                // onDelete={handleDelete}
                // onEdit={handleEdit}
                />)}
            </ul>
        </div>
    </div>
)}

export default TodoWrapper;






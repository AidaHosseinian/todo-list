import React,{useState} from "react";
import './todo.scss';
import {deleteTodo, toggleCompleted, onTodoEdit} from "../store/reducer";
import { useStore } from "../store/store";

function TodoItem({id, task, isComplete}) {
  const [store, dispatch] = useStore();
  const[editValue, setEditVAlue] = useState(task)
  const [isEdit, setIsEdit]= useState(false)

  const handleEditChange =(e) => {
    setEditVAlue(e.target.value)
  }

  const handleEdit =() => {
    setIsEdit(true)
  } 

  const onEditSaved =() => {
    setIsEdit(false)
    dispatch(onTodoEdit(id, editValue))
  }

  const onComplete =() => {
    dispatch(toggleCompleted(id))
  }

  const onDelete =() => {
    dispatch(deleteTodo(id))
  }
     
    return (<>   
        {isEdit ? <li className="edit-panel">
            <input 
                type="text" 
                value={editValue}
                onChange={handleEditChange} 
            />
            <button className="save-btn" type="button" onClick={onEditSaved}>Click To Save</button>
            </li> : <li className="todo-item" key={id}>
                <p className={`${isComplete ? "complete" : ""}`} onClick={onComplete}>{task}</p>
                <button className="delete-btn" type="button" onClick={onDelete}>Delete</button>
                <button className="edit-btn" type="button" onClick={handleEdit}>Edit</button>
            </li>}
        </>
    )}

export default TodoItem;
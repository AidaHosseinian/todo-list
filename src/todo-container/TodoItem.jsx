import React,{useState} from "react";
import './todo.scss';


function TodoItem({id, task, isComplete, onComplete, onDelete, onEdit}) {
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
    onEdit(id, editValue)
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
                <p className={` ${isComplete ? "complete" : ""}`} onClick={() => onComplete(id)}>{task}</p>
                <button className="delete-btn" type="button" onClick={() => onDelete(id)}>Delete</button>
                <button className="edit-btn" type="button" onClick={handleEdit}>Edit</button>
            </li>}
        </>
    )}

export default TodoItem;
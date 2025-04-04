import React from "react";
import './todo.scss';

function TodoContainer() {
    return <div className="todo-inner-container">
        <div className="todo-inner-container todo-task">Task 1
        <span class="material-symbols-outlined">
search
</span>
        </div>
        <div className="todo-inner-container todo-task">Task 2</div>
        <div className="todo-inner-container todo-task">Task 3</div>
        <div className="todo-inner-container todo-task">Task 4</div>
    </div>
}

export default TodoContainer;
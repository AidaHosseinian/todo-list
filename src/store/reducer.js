const ADD_TODO = 'ADD_TODO';
const IS_COMPLETE = 'IS_COMPLETE';
const DEL_TODO = 'DEL-TODO';
const EDIT_TODO = 'EDIT_TODO';
 

export const initialState = {
  todoList: []
};

export const addTodo =  (todo) => ({
  type: ADD_TODO, 
  todo
});

export const toggleCompleted =  (todoId) => ({
  type: IS_COMPLETE, 
  todoId
});

export const deleteTodo = (todoId) => ({
  type: DEL_TODO,
  todoId
})

export const onTodoEdit = (todoId, editValue) => ({
  type: EDIT_TODO,
  todoId,
  editValue
})



export const reducer = (state = initialState, action) => {
  console.log(action)
    switch(action.type)
    { 
        case ADD_TODO:   
           state.todoList.push({
              id: (((1+Math.random())*0x10000)|0).toString(16).substring(1),
              task: action.todo,
              isComplete: false
           })
            return { ...state};
         
        case IS_COMPLETE:
          return {
            ...state,
            todoList: state.todoList.map(todo => todo.id === action.todoId ? {...todo, isComplete: !todo.isComplete} : todo)
          }

        case DEL_TODO:
          
          return {
            ...state,
            todoList: state.todoList.filter(todo => todo.id != action.todoId)
          }
        case EDIT_TODO:
          
          return {
            ...state,
            todoList: state.todoList.map(todo => todo.id === action.todoId ? {...todo, task: action.editValue} : todo)
          }
      
        default:
            return {...state}
    }
};



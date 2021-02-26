
import { DELETE_LIST } from '../Actions/Types'
import initialTodoState from './InitialTodoState'


const deleteReducer = (state = initialTodoState, action) => {
    let newTodos;
    switch (action.type) {
    case DELETE_LIST:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id !== action.payload)
            return newTodos
    default:
        return state
    }
} 
 
export default deleteReducer


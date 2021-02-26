import { v4 as uuid } from 'uuid'
import { ADD_LIST, CHECK_LIST, CLEAR_COMPLETED_LIST, DELETE_LIST, FILTER_ACTIVE_LIST, FILTER_ALL_LIST, FILTER_COMPLETETED_LIST, ON_DRAG_LIST } from '../Actions/Types'
import initialTodoState from './InitialTodoState'




const reducer = (state = initialTodoState, action) => {
    let newTodos;
    switch (action.type) {
        case ADD_LIST:
            newTodos = [...state];
            let newTodo = { id: uuid(), todo: action.payload, check: false }
            newTodos[0].todos.push(newTodo)
            newTodos[0].active.push(newTodo)
            return newTodos
        case DELETE_LIST:
            newTodos = [...state];
            newTodos[0].todos = newTodos[0].todos.filter(todo => todo.id !== action.payload)
            newTodos[0].completed = newTodos[0].completed.filter(todo => todo.id !== action.payload)
            newTodos[0].active = newTodos[0].active.filter(todo => todo.id !== action.payload)
            return newTodos
        case CLEAR_COMPLETED_LIST:
            newTodos = [...state]
            newTodos[0].todos = newTodos[0].todos.filter(todo => todo.check == false)
            newTodos[0].completed = newTodos[0].completed.filter(todo => todo.check == false)
            return newTodos
        case CHECK_LIST:
            newTodos = [...state];
            newTodos[0].todos = newTodos[0].todos.map(todo => {
                if (todo.id == action.payload) {
                    todo['check'] = !todo.check
                    if (todo['check'] == true) {
                        newTodos[0].completed.push(todo)
                        let index = newTodos[0].active.indexOf(todo)
                        if (index > -1) {
                            newTodos[0].active.splice(index, 1)
                            return todo
                        }
                        return todo
                    } else {
                        newTodos[0].active.push(todo)
                        let index = newTodos[0].completed.indexOf(todo)
                        if (index > -1) {
                            newTodos[0].completed.splice(index, 1)
                            return todo
                        }
                    }
                    return todo
                } else {
                    return todo
                }
            })
            return newTodos
        case FILTER_ALL_LIST:
            newTodos = [...state];
            newTodos[0].todos = newTodos[0].active.concat(newTodos[0].completed)
            return newTodos
        case ON_DRAG_LIST:
            newTodos = [...state];
            const [reorderedItem] = newTodos[0].todos.splice(action.result.source.index, 1);
            newTodos[0].todos.splice(action.result.destination.index, 0, reorderedItem);
            return newTodos
        case FILTER_ACTIVE_LIST:
            newTodos = [...state];
            newTodos[0].todos = newTodos[0].todos.filter(todo => todo.check == true)
            newTodos[0].todos = newTodos[0].todos.concat(newTodos[0].active)
            newTodos[0].todos = newTodos[0].todos.filter(todo => todo.check == false)
            return newTodos
        case FILTER_COMPLETETED_LIST:
            newTodos = [...state];
            newTodos[0].todos = newTodos[0].todos.filter(todo => todo.check == false)
            newTodos[0].todos = newTodos[0].todos.concat(newTodos[0].completed)
            newTodos[0].todos = newTodos[0].todos.filter(todo => todo.check == true)
            return newTodos
        default:
            return state
    }
}



export default reducer


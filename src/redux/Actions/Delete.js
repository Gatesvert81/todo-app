import { CLEAR_COMPLETED_LIST, DELETE_LIST } from "./Types"

const deleteList = (id) => {
    return {
        type: DELETE_LIST,
        payload: id
    }
}    

export const clearCompletedList = () => {
    return {
        type: CLEAR_COMPLETED_LIST
    }
}

export default deleteList
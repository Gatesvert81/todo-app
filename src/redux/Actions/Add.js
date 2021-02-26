import { ADD_LIST } from './Types'

const addList = (change) => {
    return {
        type: ADD_LIST ,
        payload: change
    }
}

export default addList
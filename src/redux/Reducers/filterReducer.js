import { FILTER_ACTIVE_LIST } from "../Actions/Types";
import initialTodoState from "./InitialTodoState";


export default (state = initialTodoState, action) => {
    switch (action.type) {
        case FILTER_ACTIVE_LIST:
            return state

        default:
            return state
    }
}

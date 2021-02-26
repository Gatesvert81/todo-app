import { combineReducers } from "redux";
import addReducer from "./Reducers/reducer";
import deleteReducer from "./Reducers/DeleteReducer";


const rootReducer = combineReducers({
    add: addReducer,
    delete: deleteReducer,
})

export default rootReducer 
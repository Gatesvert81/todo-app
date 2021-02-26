import { ON_DRAG_LIST } from "./Types";


function handleOnDrag (result) {
    return {
        type: ON_DRAG_LIST ,
        result: result
    }
}

export default handleOnDrag
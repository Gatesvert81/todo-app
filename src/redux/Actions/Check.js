import { CHECK_LIST } from "./Types"

const checkList = (id) => {
    return {
        type: CHECK_LIST,
        payload: id
    }
}   

export default checkList
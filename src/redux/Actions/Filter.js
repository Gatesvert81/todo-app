import { FILTER_ACTIVE_LIST, FILTER_ALL_LIST, FILTER_COMPLETETED_LIST } from "./Types"


export const  filterAllList = () => {
    return {
        type: FILTER_ALL_LIST
    }
}

export const  filterActiveList = () => {
    return {
        type: FILTER_ACTIVE_LIST
    }
}

export const  filterCompletedList = () => {
    return {
        type: FILTER_COMPLETETED_LIST
    }
}


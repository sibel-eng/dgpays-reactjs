import { ACTIVE_TODO, PASIVE_TODO } from "./actionTypes"

export const activeToDoAction = (data) => {

    return {
        type: ACTIVE_TODO,
        payload: data
    }

}

export const removeAllToDoAction = () => {
    return {
        type: PASIVE_TODO
    }
}
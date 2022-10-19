import { ACTIVE_TODO, PASIVE_TODO } from "./actionTypes";

export const loginReducer=(state=[],action)=>{

    switch (action.type) {
        case ACTIVE_TODO:
            return [...state, action.payload]   
        case PASIVE_TODO:
            return []
            
        default:
            return state;
}
}
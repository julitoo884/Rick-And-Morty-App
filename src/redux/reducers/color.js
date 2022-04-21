import types from "../types/types";

const initialState = {
    color : '#444444'
}

export const colorReducer = (state = initialState, action) => {    
    switch (action.type) {
        case types.changeColor:
            return { color : action.payload.value }    
        case types.Initialdata:
            return { color : '#444444' }        
        default :
            return state
    }
} 
import types from "../types/types";

const initialState = {
    length : 0
} 

export const characterReducer = (state = initialState, action) => {    
    switch (action.type) {
        case types.changeLengthCharacters:
            return { length : action.payload.value }    
        case types.initialLengthCharacters:
            return { length : 0 }        
        default :
            return state
    }
}    
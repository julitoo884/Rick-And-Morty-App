import types from '../types/types';

export const colorChange = (data) => {
    return{
        type: types.changeColor,
        payload: {
            value : data
        }
    }
} 
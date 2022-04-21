import types from '../types/types';

export const characterInitialLoad = () => {
    return{
        type: types.initialLengthCharacters,
        payload: {
            value : 0
        }
    }
} 
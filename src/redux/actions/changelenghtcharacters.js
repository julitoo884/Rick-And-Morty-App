import types from '../types/types';

export const lengthCharactersChange = (data) => {
    return{
        type: types.changeLengthCharacters,
        payload: {
            value : data
        }
    }
} 
import types from '../types/types';

export const colorInitialLoad = () => {
    return{
        type: types.Initialdata,
        payload: {
            value : '#444444'
        }
    }
} 
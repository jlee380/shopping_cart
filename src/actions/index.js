import ADD_COUNTERS from '../constants/action-types';

export const handleAdd = (payload) => {
    return { 
        type: ADD_COUNTERS, payload
    }
};

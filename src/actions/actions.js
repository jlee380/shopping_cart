import { ADD_COUNTERS, DELETE_COUNTERS, RESET_COUNTERS, DECREMENT_COUNTERS, INCREMENT_COUNTERS } from '../constants/action-types';

export const handleAdd = (payload) => {
    return { 
        type: ADD_COUNTERS, payload
    }
};

export const handleDelete = (counterId) => {
    return {
        type: DELETE_COUNTERS, counterId: counterId
    }
};

export const handleReset = (payload) => {
    return {
        type: RESET_COUNTERS, payload
    }
};

export const handleIncrement = (counter) => {
    return {
        type: INCREMENT_COUNTERS, counter: counter
    }
};

export const handleDecrement = (counter) => {
    return {
        type: DECREMENT_COUNTERS, counter: counter
    }
};
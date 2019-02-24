import { ADD_COUNTERS, RESET_COUNTERS, DELETE_COUNTERS } from '../constants/action-types';
const initialState = {
    loading: 0,
    counters: [
        { id: 0, value: 1 },
        { id: 1, value: 2 }
    ]
  };
    
const rootReducer = (state = initialState, action) => {
      const newId = state.counters.length + 1;
      const newValue = 0;

      switch (action.type) {
          case ADD_COUNTERS:
            return {
              ...state,
              counters: [ ...state.counters, { id: newId, value: newValue }]
            }
        case DELETE_COUNTERS:
            return {
              ...state,
              counters: state.counters.filter((counter) => counter.id !== action.counterId)
            }
        case RESET_COUNTERS:
            // const newState = [...state];
            
            return {
              ...state,
              counters: state.counters.map((counter) => {
                return counter = { ...counter, value: 0 }
              })
              // counters: state.counters.map((c) => c.value)
            }
          default:
            return state
        }
  }

  export default rootReducer;
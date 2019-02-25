import { ADD_COUNTERS, RESET_COUNTERS, DELETE_COUNTERS, DECREMENT_COUNTERS, INCREMENT_COUNTERS } from '../constants/action-types';
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
            return {
              ...state,
              counters: state.counters.map((counter) => {
                return counter = { ...counter, value: 0 }
              })
            }
        case INCREMENT_COUNTERS:
            const increCounters = [...state.counters];
            const increIndex = increCounters.indexOf(action.counter);
            increCounters[increIndex] = {...action.counter};
            increCounters[increIndex].value++
            return {
              ...state,
              counters: increCounters
            }
              
            
        case DECREMENT_COUNTERS:
            const decreCounters = [...state.counters];
            const decreIndex = decreCounters.indexOf(action.counter);
            decreCounters[decreIndex] = {...action.counter};
            decreCounters[decreIndex].value--
            return {
              ...state,
              counters: decreCounters
        }
          default:
            return state
        }
  }

  export default rootReducer;
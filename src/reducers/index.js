import ADD_COUNTERS from "../constants/action-types";

const initialState = {
  loading: 0,
  counters: [
      { id: 0, value: 1 },
      { id: 1, value: 2 }
  ]
};

// const newId = initialState.counters.length + 1;

const rootReducer = (state = initialState, action) => {
    const newId = state.counters.length+1;
    const newValue = 0;

    switch (action.type) {
        case ADD_COUNTERS:
          return {
            ...state,
            counters: [ ...state.counters, { id: newId, value: newValue }]
          }
        default:
          return state
      }
}
export default rootReducer;
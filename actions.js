// Actions index
// define the initial state
const initialState = { count: 0 };

const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });
const reset = () => ({ type: 'RESET' });

export { initialState, increment, decrement, reset };

// create a reducer function
const tallyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      default:
        return state;
    }
  };
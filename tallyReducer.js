// Reducer function that will handle the state changes based on the actions dispatched
import { initialState, increment, decrement, reset } from '../actions';

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

export default tallyReducer;
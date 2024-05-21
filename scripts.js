import store from './store';
import { increment, decrement, reset } from './actions';

// SCENARIO 1: Initial State Verification
console.log('Initial state:', store.getState()); // Initial state: { count: 0 }

// SCENARIO 2: Incrementing the Counter
store.dispatch(increment()); // Current state: { count: 1 }
store.dispatch(increment()); // Current state: { count: 2 }

// SCENARIO 3: Decrementing the Counter
store.dispatch(decrement()); // Current state: { count: 1 }

// SCENARIO 4: Resetting the Counter
store.dispatch(reset()); // Current state: { count: 0 }
// create the store using the createStore function from the redux library
import { createStore } from 'redux';
import tallyReducer from '../reducers/tallyReducer';

const store = createStore(tallyReducer);

export default store;
//root reducer will combine bookReducer and authReducer into single reducer
//and will be passed to the store.

import authReducer from './authReducer';
import bookReducer from './bookReducer';
// combine reducer will combine our reducers into one 
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer, //update the auth property inside the state object
    book: bookReducer // update the book property insdie the state object
});

export default rootReducer;
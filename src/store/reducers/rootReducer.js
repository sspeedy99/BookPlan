//root reducer will combine bookReducer and authReducer into single reducer
//and will be passed to the store.

import authReducer from './authReducer';
import bookReducer from './bookReducer';
// combine reducer will combine our reducers into one 
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; // responsible for syncing our data.
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer, //update the auth property inside the state object
    book: bookReducer, // update the book property insdie the state object
    firestore:firestoreReducer,
    firebase : firebaseReducer //firestore reducer for the redux state
    //update the state when there is ant changes in books property in the database
});

export default rootReducer;
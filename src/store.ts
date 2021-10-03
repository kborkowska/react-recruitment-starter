import { combineReducers } from '@reduxjs/toolkit';
import { createStore } from 'redux'

// store was part of previous concept (getting data via redux thunk)
// now it is redundant but I've left it with future scaling in mind
const rootReducer = combineReducers({});

const store = createStore(rootReducer)
export default store
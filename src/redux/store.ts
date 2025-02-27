import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from './reducers/todoReducer'

const combinedReducers = combineReducers({
    todo : todoReducer
})

const store = configureStore({
    reducer : combinedReducers
})

export default store
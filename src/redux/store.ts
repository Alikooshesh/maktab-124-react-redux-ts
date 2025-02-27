import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from './reducers/todoReducer'
import counterReducer from './reducers/counterReducer'

const combinedReducers = combineReducers({
    todo : todoReducer,
    counter : counterReducer
})

const store = configureStore({
    reducer : combinedReducers
})

export default store
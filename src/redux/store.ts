import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from './reducers/todoReducer'
import counterReducer from './reducers/counterReducer'
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const combinedReducers = combineReducers({
    todo : todoReducer,
    counter : counterReducer
})

const persistedReducers = persistReducer({
    key : 'maktab-124',
    storage : storage,
    whitelist : ['todo']
},combinedReducers)

const store = configureStore({
    reducer : persistedReducers,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false
    })
})

export const persistore = persistStore(store)

export default store
import { createSlice } from "@reduxjs/toolkit";

const todoReducer = createSlice({
    name : "todos",
    initialState : [],
    reducers : {
        add : (state,action)=>{
            // @ts-ignore
            state.push({...action.payload})
        }
    }
})


export const {add} = todoReducer.actions
export default todoReducer.reducer
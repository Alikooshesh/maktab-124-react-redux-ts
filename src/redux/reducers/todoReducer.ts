import { createSlice } from "@reduxjs/toolkit";
import { Itodo } from "../../interfeaces/todo";

const todoReducer = createSlice({
    name : "todos",
    initialState : [
        {
            id : 1,
            title : "test"
        }
    ] as Itodo[],
    reducers : {
        add : (state,action)=>{
            console.log(action)
            state.push({...action.payload})
        }
    }
})


export const {add} = todoReducer.actions
export default todoReducer.reducer
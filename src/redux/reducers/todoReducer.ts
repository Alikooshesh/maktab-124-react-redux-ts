import { createSlice } from "@reduxjs/toolkit";
import { Itodo } from "../../interfeaces/todo";

const init : Itodo[] = []


const todoReducer = createSlice({
    name : "todos",
    initialState : init,
    reducers : {
        add : (state,action)=>{
            console.log(action)
            state.push({...action.payload})
        },
        remove : (state,action)=>{
            return state.filter(item => item.id !== action.payload.id)
        }
    }
})


export const {add , remove} = todoReducer.actions
export default todoReducer.reducer
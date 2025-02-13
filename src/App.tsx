import React, { createContext, useEffect, useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/user';
import axios from 'axios';

interface Itodo {
  createdAt: string | number,
  title: string,
  id: string | number
}

interface reducerAction {
  type: "add" | "delete" | "update",
  data: {
    id?: string | number
    title?: string
    newTitle?: string
  }
}



export const AppContext = createContext<{todoList : Itodo[],todoDispatch : Function} | null>(null)




function todoReducer(state: Itodo[], action: reducerAction): Itodo[] {
  switch (action.type) {
    case "add":
      const newTodo: Itodo = {
        createdAt: Date.now(),
        title: action.data.title ?? "",
        id: Date.now()
      }
      return [...state, newTodo]

    case "delete":
      return state.filter(todo => todo.id !== action.data.id)

    case "update":
      return state.map(item => {
        if (item.id === action.data.id) {
          return { ...item, title: action.data.newTitle ?? "" }
        }

        return item
      })
  }
}

function App() {

  const [state, todoDispatch] = useReducer(todoReducer, [])

  const [todoInput, setTodoInput] = useState<string>("")

  console.log({state})

  return (
    <>
      <AppContext.Provider value={{todoList : state , todoDispatch}}>
      <div>
        <div>
          <input
            value={todoInput}
            onChange={e => setTodoInput(e.target.value)}
          />
          <button onClick={() => {
            todoDispatch({ type: "add", data: { title: todoInput } })
            setTodoInput("")
          }}>add</button>
        </div>
        <User/>
      </div>
      </AppContext.Provider>
    </>
  );
}

export default App;

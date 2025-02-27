import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import RoutingSystem from './router';
import { Itodo } from './interfeaces/todo';
import { useState } from 'react';
import { title } from 'process';
import { add } from './redux/reducers/todoReducer';

function App() {

  const dispatch = useDispatch()

  const [inputValue , setInputValue] = useState("")

  const todo:Itodo[] = useSelector((state:any)=>state.todo)

  function addNewTodo(){
    const newTodo = {
      id : Date.now(),
      title : inputValue
    }

    dispatch(add(newTodo))
  }

  return (
    <>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{border : "1px solid black"}}/>
      <button onClick={addNewTodo}>add</button>
      {todo.map(item => <p>{item.title}</p>)}
      {/* <RoutingSystem/> */}
    </>
  );
}

export default App;

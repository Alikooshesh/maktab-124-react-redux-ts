import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import RoutingSystem from './router';
import { Itodo } from './interfeaces/todo';
import { useState } from 'react';
import { add, remove } from './redux/reducers/todoReducer';
import { decrease, increase } from './redux/reducers/counterReducer';

function App() {

  const dispatch = useDispatch()

  const [inputValue , setInputValue] = useState("")

  const todo:Itodo[] = useSelector((state:any)=>state.todo)
  const counter = useSelector((state:any)=>state.counter)

  function addNewTodo(){
    const newTodo = {
      id : Date.now(),
      title : inputValue
    }

    dispatch(add(newTodo))
  }

  return (
    <>
      <button onClick={()=> dispatch(increase())}>+</button>
      <p>counter : {counter}</p>
      <button onClick={()=> dispatch(decrease())}>-</button>
      <hr/>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{border : "1px solid black"}}/>
      <button onClick={addNewTodo}>add</button>
      {todo.map(item => (
        <div>
          <p>{item.title}</p>
          <button onClick={()=> dispatch(remove({id : item.id}))}>remove</button>
        </div>
      ))}
      {/* <RoutingSystem/> */}
    </>
  );
}

export default App;

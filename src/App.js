import React, {useState} from 'react';
import Tweet from './Tweet';



const App = () => {
  const [count, setcount]= useState(0);
  const add = () =>{
    setcount(count +1)

  }
  const sub = () =>{
    setcount(count -1)

  }

  return (
    <div className='main'>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <h1>{count}</h1>
      <Tweet />
    </div>
  )
}

export default App
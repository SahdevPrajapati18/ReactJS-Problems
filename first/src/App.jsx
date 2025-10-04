import React from 'react'
import {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <p>Count is : {count}</p>
      <button onClick={() => setCount(count-1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default App

import React from 'react'
import {useState, useRef} from 'react'

const App = () => {
  const maxLimit = 100;
  const [count, setCount] = useState(maxLimit);
  const inputRef = useRef(null);
  const p = useRef(null);


  const handleChange = () => {
    const currentLength = inputRef.current.value.length;
    const remaining = maxLimit - currentLength;
    setCount(remaining);

    if (remaining < 11) {
      p.current.style.color = "red";
    } else if (remaining < 30) {
      p.current.style.color = "orange";
    } else {
      p.current.style.color = "green";
    }

  };

  return (
    <div>
      <input ref={inputRef} onChange={handleChange}type="text" maxLength={maxLimit}/>
      <p ref={p}>Remaining : {count}</p>      
    </div>
  )
}

export default App

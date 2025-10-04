import React from 'react'
import {useState, useRef, useEffect} from 'react'
import './App.css';


const App = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);
  const prevCount = useRef(null);

  useEffect(()=>{
    inputRef.current.focus();
  },[]);

  useEffect(()=>{
    prevCount.current = count;
  },[count]);

  const handleIncrement = ()=>{
    setCount((prev)=>{
      const newCount = prev + 1;
      setHistory((h)=>[...h, newCount]);
      return newCount;
    })
  }

  const handleDecrement = ()=>{
    setCount((prev)=>{
      const newCount = prev - 1;
      setHistory((h)=>[...h, newCount]);
      return newCount;
    })
  }

  const handleReset = ()=>{
    setCount(0);
    setHistory([]);
  }


  return (
    <div className="app-container">
      <h2>Counter App</h2>

      <div className="counter-controls">
        <button className="decrement-btn" onClick={handleDecrement}>-</button>
        <input 
          ref = {inputRef}
          value = {count}
          type="text" 
          readOnly
          className="count-display"
        />
        <button className="increment-btn" onClick={handleIncrement}>+</button>
      </div>
      <button className="reset-btn" onClick={handleReset}>Reset</button>

      <h3>Previous Count: {prevCount.current ?? "None"}</h3>

      <h3>History</h3>
      <ul className="history-list">
        {history.map((item, index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

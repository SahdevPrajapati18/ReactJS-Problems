import React from 'react'
import {useState, useRef} from 'react'


const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timerId = useRef(null);

  const handleStartStop = ()=>{
    if(isRunning){
      clearInterval(timerId.current);
    }else{
      timerId.current = setInterval(()=>{
        setTime(prevTime => prevTime + 10);
      },10);
    }
    setIsRunning(prevIsRunning => !prevIsRunning);
  }

  const handleReset = ()=>{
    clearInterval(timerId.current);
    setTime(0);
    setIsRunning(false);
    setLaps([]);
  }

  const handleLap = ()=>{
    setLaps(prevLaps => [...prevLaps, time]);
  }

  const formatTime = (time)=>{
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;

  }


  return (
    <div>
      <h1>Stopwatch with Lap Features</h1>
      <h2>{formatTime(time)}</h2>

      <div>
        <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>    
        <button onClick={handleLap} disabled={!isRunning}>Lap</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {/* Display Laps */}
      {laps.length > 0 && (
        <div>
          <h2>Lap Times</h2>
          <ul>
            {laps.map((lap, index) => (
              <li key={index}>Lap {index +
                1}: {formatTime(lap)}</li>
            ))}
          </ul>
        </div>
      )}

    </div>

  )
}
export default App

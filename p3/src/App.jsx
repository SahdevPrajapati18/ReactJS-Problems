import React from 'react'
import Create from './Create'
import Read from './Read'
import {useState} from 'react'
import './index.css'
import Header from './Header'

const App = () => {

  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container mx-auto p-4 bg-gray-800 h800 min-h-screen">
      <Header/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Create tasks={tasks} setTasks={setTasks}/>
        <Read tasks={tasks} deleteTask={deleteTask}/>
      </div>
    </div>
  )
}

export default App

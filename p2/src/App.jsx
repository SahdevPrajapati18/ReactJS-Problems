import Create from './Create'
import {useState} from 'react'
import Read from './Read'

const App = () => {
     const [todo, setTodo] = useState([
          {id : 1,
              title: 'Kamm Karle bhai',
              isCompleted: false
          }
      ]);
  return (
    <div>
        <Create todo={todo} setTodo={setTodo}/>
        <Read todo={todo} setTodo={setTodo}/>
    </div>
  )
}

export default App

import Create from './Create'
import {useState} from 'react'
import Read from './Read'
import Header from './Header'



const App = () => {
     const [todo, setTodo] = useState([
          {id : 1,
              title: 'Kamm Karle bhai',
              isCompleted: false
          }
      ]);
  return (
    <div className="min-h-screen bg-gray-200">
      <Header/>
      <main className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Create todo={todo} setTodo={setTodo}/>
          <Read todo={todo} setTodo={setTodo}/>
        </div>
      </main>
    </div>
  )
}

export default App

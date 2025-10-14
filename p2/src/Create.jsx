import {useState} from 'react'

const Create = (props) => {
    const todo = props.todo;
    const setTodo = props.setTodo;
 
    const [title, setTitle] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newtodo ={
            id: Date.now(),
            title,
            isCompleted: false,
        }
        setTodo([...todo, newtodo]);
        setTitle("");
    }

  
  return (
    <div className="w-80 p-7 position-fixed mx-auto bg-gray-100 rounded-lg shadow-md ">
      <h1 className="p-5 mb-5 text-2xl font-bold text-center text-white bg-indigo-600 rounded-lg">Create a New Task</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e)=>setTitle(e.target.value)}
          value = {title}
          type="text" 
          placeholder="Enter title"
          name="title" 
        />
        <button className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create Task</button>
      </form>
    </div>
  )
}

export default Create

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
    <div>
      <h1>Create Tasks</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=>setTitle(e.target.value)}
        value = {title}
        type="text" placeholder="Enter title"
        name="title" />
        <br />
        <br />
        <button>Create Task</button>
      </form>
      
    </div>
  )
}

export default Create

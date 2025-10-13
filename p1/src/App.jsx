import React from 'react'
import {useState} from 'react'
import './App.css'

const App = () => {
  const [todo, setTodo] = useState([
    {id : 1,
      title: 'Kamm Karle bhai',
      isCompleted: false
    }
  ])

  const [title,setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("mumbai");

  const handleSubmit = (e)=>{
    e.preventDefault();

    const newTodo ={
      id: Date.now(),
      title,
      isCompleted: completed,
      gender,
      city,
    };

    setTodo([...todo, newTodo]); // add to list
    setTitle("");
    setCompleted(false);
    setGender("");
    setCity("mumbai");
  };


  
  return (
   <div className="container">
      <h1>
        Create Tasks
      </h1>
      <form onSubmit = {handleSubmit}>
        <label htmlFor="title">Title:
          <input 
            id="title"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Enter title" />
        </label>
      
      <br />
      <br />
      <label htmlFor="completed">
        <input 
          id="completed"
          onChange={(e)=>setCompleted(e.target.checked)}
          checked={completed}
          type="checkbox" />
        Completed
      </label>
      <br />
      <br />
      <fieldset>
        <legend>Gender:</legend>
        <label htmlFor="male">
          <input 
            id="male"
            name="gender"
            value="male" 
            onChange={(e)=>setGender(e.target.value)}
            checked={gender === "male"} 
            type="radio" />
          Male
        </label>
        <label htmlFor="female">
          <input 
            id="female"
            name="gender"
            value="female" 
            onChange={(e)=>setGender(e.target.value)} 
            checked={gender === "female"}
            type="radio" />
          Female
        </label>
      </fieldset>
      <br />
      <br />
      <label htmlFor="city">City:
        <select 
          id="city"
          onChange={(e)=>setCity(e.target.value)}
          name="city" 
          value={city}>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
        </select>
      </label>
      <br />
      <br />
      <button type="submit">Create Todo</button>
      </form>

      <hr />

      <h2>Todo List:</h2>
      <ul>
        {todo.map((task)=>(
          <li key={task.id}>
            <b>{task.title}</b> - {task.isCompleted ? "Done":"Pending"} - {" "}
            {task.gender} - {task.city}
          </li>
        ))}
      </ul>
   </div>
  )
}

export default App

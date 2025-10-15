import React from 'react'


const Read = ({ tasks, deleteTask }) => {
  return (
    <div className="bg-blue-300 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Your Tasks</h2>
        <ul className="space-y-4">
            {tasks.map((task) =>(
                <li key={task.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                    <div>
                        <h3 className="font-bold text-lg">{task.title}</h3>
                        <p className="text-gray-600">{task.description}</p>
                        <div className="text-sm text-gray-500 mt-2">
                            <span>{task.date}</span> at <span>{task.time}</span>
                        </div>
                    </div>
                    <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Read

import React from 'react'
import { useState} from 'react'
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';


const Create = ({tasks, setTasks}) => {
   
    const {
        handleSubmit,
        register,
        reset,
        formState: {errors}

    } = useForm();

    const submitHandler = (data) =>{
         const newTask = {
            id: nanoid(),
            title: data.title,
            description: data.description,
            date: data.date,
            time: new Date().toLocaleTimeString(), // current time
        };
        setTasks([...tasks, newTask]);
        reset(); // clear form
    }
  return (
    <div className="p-4 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-white">Create <span className="text-indigo-600">Reminder</span> Tasks</h1>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-white">Title</label>
                <input type="text" placeholder='Title' {...register('title',{required:true})} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                {errors.title && <span className="text-red-500 text-sm">Title is required</span>}
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-white">Description</label>
                <input type="text" placeholder='Description' {...register('description',{required:true})} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                {errors.description && <span className="text-red-500 text-sm">Description is required</span>}
            </div>
            <div>
                <label htmlFor="date" className="block text-sm font-medium text-white">Date</label>
                <input type="date" placeholder='Date' {...register('date',{required:true})} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                {errors.date && <span className="text-red-500 text-sm">Date is required</span>}
            </div>
            <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create Task</button>
        </form>
    </div>
  )
}

export default Create

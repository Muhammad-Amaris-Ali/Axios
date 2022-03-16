import React, { useState } from 'react';

export const Todo = () => {
    const [task, setTask] = useState("");
    const handlechange = (e) => {
        setTask(e.target.value);
    };
    const AddTask = () =>{
        console.log(task)};
    return <div className='todo'>
        <input type="text" name="text" id="text" onChange={(e)=> handlechange} placeholder="Add task here..." />
        <button className='add-btn' >Add</button>
 

    </div>;
};

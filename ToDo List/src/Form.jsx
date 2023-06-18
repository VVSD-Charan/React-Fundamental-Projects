import { useState } from "react";
import { toast } from 'react-toastify';

export const Form = ({addItem}) =>
{
    const [newItemName,setNewItemName]=useState('');

    const handleSubmit = (e) =>
    {
        e.preventDefault();
       
        if(!newItemName)
        {
            toast.error("Please provide a task");
            return;
        }

        addItem(newItemName);
        setNewItemName('');
    }

    return (
        <form onSubmit={handleSubmit}>

            <h4>To Do List</h4>

            <div className="form-control">

                <input type="text" name="newItemName" className="form-input" value={newItemName} onChange={(e)=>setNewItemName(e.target.value)}/>
                <button className="btn" type="submit">Add Task</button>

            </div>
        </form>
    );

};
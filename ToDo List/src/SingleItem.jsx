import { useState } from "react";

export const SingleItem = ({item,removeItem,editItem}) =>
{
    return (
        <div className="single-item">
            <input type="checkbox" onChange={()=>editItem(item.id)} checked={item.completed}/>
            <p style={{textDecoration: item.completed&&'line-through'}}>{item.name}</p>
            <button className="btn remove-btn" type="button" onClick={()=>removeItem(item.id)}>Delete Task</button>
        </div>
    );
};
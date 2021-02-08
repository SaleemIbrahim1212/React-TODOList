import React from 'react';
import './Todo.css';
const todo = (props)=> {
    return (
        <div className="Todo"> 
        <p>TODO task: {props.name} </p>
        <p> {props.children}</p>
        <sub onClick = {props.click}> Click to delete</sub>
        
        </div> 
    
    
)

        

};

export default todo;
import React from 'react';
import './Todo.css';
const todo = (props)=> {
    return (
        <div className="Todo"> 
        <p onClick={props.click}>TODO task: {props.name} </p>
        <p> {props.children}</p>
        <input className = "textbox" type ="text" onChange={props.changed} value ={props.name} onClick={""}/> 
        </div> 
    
    
)

        

};

export default todo;
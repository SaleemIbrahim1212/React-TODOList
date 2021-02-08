import React from 'react';
import './Todo.css';
const todo = (props)=> {
    return (
        <div class = "grid-child">
        <div class="ui card"> 
            <div class ="content">
                <div class ="header"> Todo Task</div>
        
                <div class ="description">
                    <p color = "black"> {props.name} </p>
                    <p color ="black"> {props.children}</p>
                    <sub color="blue" onClick = {props.click}> Click to delete</sub>
                </div> 
            </div>
        
        </div> 
        </div>
    
    
)

        

};

export default todo;
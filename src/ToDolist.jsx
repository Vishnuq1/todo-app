import React from 'react';
//import App from './App'

const ToDolist=(props)=>{

    
    
    return(
    <>
    <div className="todo_style">
    <i className="fa-regular fa-circle-xmark" 
     onClick={()=>{
        props.onSelect(props.id);
     }} /> 

    <li>   {props.text}   </li> 
    </div>
    </>
    );
};


export default ToDolist;
import React from 'react';
import  './Button.css';

const button =(props) =>{
    const  type = props.btnType ;
  return  <button
    className= {type} 
    onClick={props.clicked}>{props.children}</button>
};
export default button;
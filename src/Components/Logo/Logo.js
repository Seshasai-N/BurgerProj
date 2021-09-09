import React from 'react'
import icon from '../../assets/images/burger-logo.png'
import './Logo.css'
const logo=(props)=>(
    <div className='Logo' style={{height:props.height}}>
        <img src={icon}></img>
    </div>
)
export default logo;
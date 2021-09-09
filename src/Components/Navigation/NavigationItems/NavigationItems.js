import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationitems=(props)=>(
    <ul className='NavigationItems'>
       {props.valid?<NavigationItem  link='/burger' >BURGER BUILDER</NavigationItem>:null}
       {props.valid?<NavigationItem link='/oders' >ODERS</NavigationItem>:null}
       {!props.valid ? <NavigationItem link='/' exact >LogIn</NavigationItem>:<NavigationItem link='/logout' >LogOut</NavigationItem>}
       
    </ul>
);

export default navigationitems
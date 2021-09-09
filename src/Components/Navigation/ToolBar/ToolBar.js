import React from 'react'
import './ToolBar.css'
import Logo from '../../Logo/Logo'
import NavBar from '../NavigationItems/NavigationItems'
const toolbar=(props)=>(
  <header className='Toolbar'>
      
      <div onClick={props.toggle} className='DrawerToggle'>
          <div></div>
          <div></div>
          <div></div>
      </div>
      <Logo height='80%'/>
      
      <div className='DesktopOnly'>
      <nav>
         <NavBar valid={props.valid}></NavBar>
      </nav>
      </div>
      
  </header>
);

export default toolbar
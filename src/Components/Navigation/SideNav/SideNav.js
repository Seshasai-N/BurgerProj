import React from 'react'
import Logo from '../../Logo/Logo'
import './SideNav.css'
import NavBar from '../NavigationItems/NavigationItems'
import BackDrop from '../../Ui/Backdrop/Backdrop';
import Aux from '../../../HOC/Aux'
const sidenav=(props)=>{
    let action =['SideNav','close']
    if(props.show){
        action=['SideNav','open']
    }
    return (

        <Aux>
            <BackDrop show={props.show} clicked={props.closed}></BackDrop>
        <div className={action.join(' ')} onClick={props.closed}>
            <Logo height='11%'></Logo>
            <nav  >
                <NavBar valid={props.valid}></NavBar>
            </nav>

        </div>
        </Aux>
    );
}

export default sidenav
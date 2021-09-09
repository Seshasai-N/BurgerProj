import React, { Component } from 'react'
import *as actions from '../../../Store/Actions'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
 class LogOut extends Component {
     componentDidMount(){
         this.props.onLogout();

     }
    render() {
        return <Redirect to='/' />
    }
}
 const mapdispatch=dispatch=>{
     return{
         onLogout:()=>dispatch(actions.logout())
     }
 }
export default connect(null,mapdispatch) (LogOut)
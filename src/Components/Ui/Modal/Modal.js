import React, { Component } from'react'
import './Modal.css'
import Aux from '../../../HOC/Aux';
import BackDrop from '../../Ui/Backdrop/Backdrop';
class Modal extends Component{
    shouldComponentUpdate(nextprops,nextState){
        return nextprops.show !== this.props.show || nextprops.children!==this.props.children;
    }
   render(){
       return(
        <Aux>
        <BackDrop  show={this.props.show} clicked={this.props.close} />
<div className='Modal' style={{transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
opacity: this.props.show ? '1':'0'
}}>
    {this.props.children}
</div>
</Aux>
       )
   } 
} 
export default Modal;
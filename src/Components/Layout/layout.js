import React, { Component } from 'react';
import Aux from '../../HOC/Aux';
import './Layout.css';
import { connect} from 'react-redux'
import ToolBar from '../Navigation/ToolBar/ToolBar'
import SideNav from '../Navigation/SideNav/SideNav'
class Layout extends Component {
    state={
        showSideNav:false
    }
    closeSideNav =()=>{
        this.setState({showSideNav:false})
    }
    openSideNav =()=>{
        this.setState((prevState)=>{
            return {showSideNav:!prevState.showSideNav};
        })
    }
    render() {
        return (
            <Aux>
                <ToolBar valid={this.props.auth} toggle={this.openSideNav} />
            
                <SideNav valid={this.props.auth} closed={this.closeSideNav} show={this.state.showSideNav} />
                <main className='Content'>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

const mapProps=state=>{
    return{
        auth:state.auth.token !==null
    }
}
export default connect(mapProps) (Layout);
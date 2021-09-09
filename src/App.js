import './App.css';
import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Layout from './Components/Layout/layout'
import BurgerBuild from './Containers/BurgerBulider/BurgerBulider'
import Checkout from './Containers/Checkout/Checkout'
import Oders from './Containers/OdersInfo/Odersinfo'
import Auth from './Containers/Auth/Auth'
import LogOut from './Containers/Auth/LogOut/LogOut'
class App extends Component {
    render() {
        return (
            
                <Layout >
                <Route path='/'exact component={Auth}/>
                   <Route path='/burger'  component={BurgerBuild}/>
                   <Route path='/checkout' component={Checkout}/>
                   <Route path='/oders' component={Oders}/>
                   
                   <Route path='/logout' component={LogOut}/>
                </Layout>
           
        )
    }
}


export default App;

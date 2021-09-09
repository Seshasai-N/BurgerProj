import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import CheckoutSummary from '../../Components/Oders/CheckoutSummary/CheckoutSummary'
import Contact from './ContactInfo/ContactInfo'
import { connect } from 'react-redux'
import * as actions from '../../Store/Actions/index'
class Checkout extends Component {

    

    // componentWillMount(){

    //     const query= new URLSearchParams(this.props.location.search);

    //     const ingredients={}
    //     for(let param of query.entries()){
    //         ingredients[param[0]]=+param[1];
    //     }

    //      this.setState({ingredient:ingredients})
    // }
    canceloder = () => {
        this.props.history.goBack();

    }
    confirmOder = () => {
        console.log(this.props)
        this.props.history.replace('/checkout/contact')
    }
    render() {
        let summary = <Redirect to='/' />
        if (this.props.ings) {
            const purchaseredirect=this.props.purchased?<Redirect to='/'/>:null;

            summary = (
                <div>
                    {purchaseredirect}
                    <CheckoutSummary ingredients={this.props.ings}
                        cancel={this.canceloder}
                        oder={this.confirmOder}
                    />
                    <Route path={this.props.match.path + '/contact'}
                        component={Contact} />

                </div>
            )
        }

        return summary
    }
}
const mapStatetoProps = state => {
    return {
        ings: state.burger.ingredients,
        purchased:state.orders.purchased
    }
}


export default connect(mapStatetoProps)(Checkout)
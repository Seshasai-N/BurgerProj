import React, { Component } from 'react';
import Aux from '../../HOC/Aux';
import Burger from '../../Components/Burger/Burger'
import './BurgerBulider.css';
import BuildControllers from '../../Components/Burger/Build-Controls/BuildControls';
import Modal from '../../Components/Ui/Modal/Modal';
import OderSumary from '../../Components/Burger/OderSummary/OderSummary';
import WEH from '../../HOC/WithErrorHandling/WithErrorHandling';
import axios from '../../axios.oders';
import { connect } from 'react-redux'
import Spinner from '../../Components/Ui/Spinner/Spinner'
import * as burgerActions from '../../Store/Actions/index'


class BurgerBulider extends Component {
    constructor(props) {
        super(props)

        this.state = {


            modal: false,

        }
    }
    componentDidMount() {
        // [axios Http Call]

        this.props.onFetchIngredients()

    }
    updatePurchase(ingredients) {
        //   const ingredients ={
        //       ...this.state.ingredients
        //   }
        let sum = Object.keys(ingredients).map(igkeys => {
            return ingredients[igkeys]
        }).reduce((sum, el) => {
            return sum + el
        }, 0)
        return sum > 0;
    }

    // [add ingredenta]
    // addMore = (type) => {

    //     const oldCount = this.state.ingredients[type];
    //     const updateCount = oldCount + 1;
    //     const updateIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updateIngredients[type] = updateCount;
    //     const priceAddition = Ingerdients_prices[type];
    //     const oldprice = this.state.totalprice;
    //     const price = oldprice + priceAddition;
    //     this.setState({ totalprice: price, ingredients: updateIngredients })
    //     //    console.log(this.state.ingredients[type])
    //     //    const count = this.state.ingredients[type] + 1;
    //     //    const price= this.state.totalprice + Ingerdients_prices[type]

    //     //    this.setState({ ingredients: { ...this.state.ingredients, [type]: count },
    //     // totalprice:price
    //     // })
    //     this.updatePurchase(updateIngredients);
    // }
    // [remove ingredenta]
    // lessSome = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updateCount = oldCount - 1;
    //     const updateIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updateIngredients[type] = updateCount;
    //     const priceAddition = Ingerdients_prices[type];
    //     const oldprice = this.state.totalprice;
    //     const price = oldprice - priceAddition;
    //     this.setState({ totalprice: price, ingredients: updateIngredients })
    //     //         const count = this.state.ingredients[type] - 1;
    //     //     const price= this.state.totalprice - Ingerdients_prices[type]
    //     //     this.setState({ ingredients: { ...this.state.ingredients, [type]: count },
    //     //   totalprice:price
    //     //    })
    //     this.updatePurchase(updateIngredients);
    // }
    oderNow = () => {
        this.setState({ modal: true })
    }
    cancel = () => {
        this.setState({ modal: false })
    }
    placeOder = () => {
        this.props.purchaseinit()
        this.props.history.push('/checkout')
    }
    // [Sending data via params]
    // placeOder = () => {
    //     const queryParams=[];
    //     for(let i in this.state.ingredients){
    //         queryParams.push(encodeURIComponent(i)+ '='+ encodeURIComponent(this.state.ingredients[i]))
    //     }
    //     console.log(queryParams)
    //     const query=queryParams.join('&')
    //     this.props.history.push({
    //         pathname:'/checkout',
    //         search:'?'+query
    //     })
    // this.setState({ loading: true })

    // const oder = {
    //     ingredients: this.state.ingredients,
    //     price: this.state.totalprice,
    //     customer: {
    //         name: 'seshu',
    //         adress: {
    //             street: 'texas',
    //             pincode: 45002,
    //             country: 'India'
    //         },
    //         email: 'seshu@seshu.com'
    //     },
    //     deliveryMethod: 'fastest'

    // }
    // axios.post('/oders.json', oder).then(
    //     response => {
    //         this.setState({ loading: false })
    //     }
    // ).catch = (error => {
    //     this.setState({ loading: false })
    // })
    // this.cancel()

    // }
    render() {
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let burrger = <Spinner />
        let oderSummary = null;

        if (this.props.ings) {
            burrger = (<Aux>
                <Burger ingredients={this.props.ings} />

                <BuildControllers addItem={this.props.onIngADD}
                    removeItem={this.props.onIngremove}
                    disabled={disabledInfo}
                    price={this.props.price}
                    oder={this.updatePurchase(this.props.ings)}
                    confirm={this.oderNow}

                />
            </Aux>)
            oderSummary = <OderSumary show={this.state.modal} price={this.props.price}
                cancel={this.cancel} confirm={this.placeOder} ingredientsList={this.props.ings} />

        }

        return (
            <Aux>
                <Modal show={this.state.modal}>
                    {oderSummary}
                </Modal>
                {burrger}
            </Aux>
        )
    }
}
const mapStatetoProps = state => {
    return {
        ings: state.burger.ingredients,
        price: state.burger.totalprice
    }
}
const dispatchtoProps = dispatch => {
    return {
        onIngADD: (ing) => dispatch(burgerActions.addIngredient(ing)),
        onIngremove: (ing) => dispatch(burgerActions.removeIngredient(ing)),
        onFetchIngredients: () => dispatch(burgerActions.fetchIngredient()),
        purchaseinit: () => { dispatch(burgerActions.purchaseInit()) }
    }

}

export default connect(mapStatetoProps, dispatchtoProps)(WEH(BurgerBulider, axios))
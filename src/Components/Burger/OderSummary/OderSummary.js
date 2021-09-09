import React, { Component } from 'react'
import Aux from '../../../HOC/Aux'
import Button from '../../Ui/Button/Button'
class OderSumary extends Component{

    render(){
        const ingredientsList = Object.keys(this.props.ingredientsList).map(igkeys => {
            return <li key={igkeys}><span style={{ textTransform: 'capitalize' }}>{igkeys}</span>: {this.props.ingredientsList[igkeys]}</li>
        })
        return (
            <Aux>
                <h3>Your Oder</h3>
                <p>A Delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsList}
                </ul>
        <p>Total Price : $ {this.props.price}</p> 
                <Button btnType="Danger" clicked={this.props.cancel}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.confirm}>CONTINUE</Button>
            </Aux>
        )
    }
} 

export default OderSumary
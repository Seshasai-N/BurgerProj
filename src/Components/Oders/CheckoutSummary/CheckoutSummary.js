import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../Ui/Button/Button'
import './CheckoutSummary.css'
const checkoutSummary = (props) => {
    return (
        <div className='checkoutSummary'>
            <h1>We Hope It Taste Better</h1>
            <div style={{ width: '100%', height: '300px', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
           
            <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.oder}>CONFIRM</Button>
            
            


        </div>
    )
}
export default checkoutSummary
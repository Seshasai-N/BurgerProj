import React from 'react'
import './Oders.css'
import Logo from '../Logo/Logo'
const Oders = (props) => {
    const ingredients = [];
    for (let i in props.ingredients) {
        ingredients.push({
            name: i,
            amount:
                props.ingredients[i]
        }
        )
    }
    const ingreditent = ingredients.map(ig => {
        return <span key={ig.name}
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
        >{ig.name}{ig.amount}</span>
    })
    return (
        <div className='Oders' >
            {ingreditent}
    <label style={{
               fontWeight:'bolder'
            }}>{props.price}</label>
           <label  style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                float:'right',
                color:'green',
                backgroundColor:'black',
                border: '1px solid #ccc',
                padding: '5px'
            }}>{props.customer.delivaryMethod}</label> 
        </div>
    )
}
export default Oders
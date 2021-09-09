import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'


const buildControls = (props) => {
    const controls = [
        {label : 'Salad',type:'salad'},
        {label : 'Bacon',type:'bacon'},
        {label : 'Cheese',type:'cheese'},
        {label : 'Meat',type:'meat'},
      
    ];
    
    return <div className='BuildControls'>
        <p>Current prices :${props.price}</p>
        {controls.map(ctrl =>(
            <BuildControl key={ctrl.label}  label={ctrl.label}
            added={() =>props.addItem(ctrl.type)}
            remove={() =>props.removeItem(ctrl.type) 
            } disabled={props.disabled[ctrl.type]}
            />
        ))}
<button className='Checkout ' disabled={!props.oder} onClick={props.confirm}>OderNow</button>
    </div>

};
export default buildControls


// {label : 'RedSalad',type:'red'}
import React from 'react'
import './Input.css'
const input = (props) => {
    let inputele = null
    let validation=''
    const styles = ['InputEle']
    if (props.touched && props.invalid && props.shouldvalidate ) {
        styles.push('Invalid')
        validation='*please enter this field'
    }
    switch (props.elementType) {
        case ('select'):
            inputele = <select className={styles.join(' ')} value={props.value} onChange={props.clicked}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayName}
                    </option>
                ))}
            </select>
            break;
        case ('textarea'):
            inputele = <textarea className={styles.join(' ')} {...props.elementConfig} onChange={props.clicked} />
            break;
        default:
            inputele = <input className={styles.join(' ')} {...props.elementConfig} value={props.value} onChange={props.clicked} />
            break;
    }
    return (
        <div className='Input'>
            <label className='Label'>{props.elementConfig.placeholder}</label>
            {inputele}
            {validation}
        </div>
    )
}

export default input

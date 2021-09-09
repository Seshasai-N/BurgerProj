import React, { Component } from 'react'
import './ContactInfo.css'
import Button from '../../../Components/Ui/Button/Button'
import Spinner from '../../../Components/Ui/Spinner/Spinner'
import axios from '../../../axios.oders';
import {connect} from 'react-redux'
import Input from '../../../Components/Ui/Input/Input'
import weh from '../../../HOC/WithErrorHandling/WithErrorHandling'
import * as oderActions from '../../../Store/Actions/index'
 class ContactInfo extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                }, valid: false,
                touched:false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                }, valid: false,
                touched:false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip-Code'
                },
                value: '',
                validation: {
                    required: true
                }, valid: false,
                touched:false,
                minLenght: 5,
                maxLenght: 7
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                }, valid: false,
                touched:false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true
                }, valid: false,
                touched:false
            },
            delivaryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [{ value: 'fast', displayName: 'Fast' },
                    { value: 'slow', displayName: 'Slow' }
                    ]

                },
                value: 'fast'
            },

        },
        loading: false
    }
    oder = (event) => {
        event.preventDefault();
       
        const formData = {}
        for (let element in this.state.orderForm) {
            formData[element] = this.state.orderForm[element].value
        }

        const oder = {
            ingredients: this.props.ings,
            customer: formData,
            price:'$'+ this.props.price

        }
        this.props.onOrderBurger(oder)
        
    }
    changehandler = (event, identifier) => {
        const clone = {
            ...this.state.orderForm
        }
        const updatedinput = {
            ...clone[identifier]
        }
        updatedinput.value = event.target.value
        if(updatedinput.validation){
            updatedinput.valid = this.checkValidator(updatedinput.value, updatedinput.validation)
            updatedinput.touched=true
        }
        clone[identifier] = updatedinput
        this.setState({ orderForm: clone })
    }
    checkValidator(value, rules) {
        let isValid = false;
        if (rules.required) {
            isValid = value.trim() !== '';
        }
        if (rules.minLenght) {
            isValid = value.lenght >= rules.minLenght
        }
        if (rules.maxLenght) {
            isValid = value.lenght <= rules.maxLenght
        }
        return isValid
    }
    render() {
        const formElements = []
        for (let ele in this.state.orderForm) {
            formElements.push({
                id: ele,
                config: this.state.orderForm[ele]
            })
        }
        let form = (<form onSubmit={this.oder}>
            {formElements.map(formelement => (
                <Input key={formelement.id}
                    elementType={formelement.config.elementType}
                    elementConfig={formelement.config.elementConfig}
                    value={formelement.config.value}
                    invalid={!formelement.config.valid}
                    shouldvalidate={formelement.config.validation}
                    touched={formelement.config.touched}
                    clicked={(event) => this.changehandler(event, formelement.id)} />
            ))}
            <Button btnType='Success' >SUBMIT</Button>
        </form>
        )
        if (this.props.loading) {
            form = <Spinner />
        }
        return (
            <div className='Contact'>
                <h1>Enter Your Data</h1>
                {form}
            </div>
        )
    }
}
const mapStatetoProps=state=>{
    return {
    ings:state.burger.ingredients,
    price:state.burger.totalprice,
    loading:state.orders.loading
    }
}
const dispatchActions=dispatch=>{
    return{
        onOrderBurger:(oderData)=> dispatch(oderActions.purchaseBurger(oderData))
    }
    
}

export default connect(mapStatetoProps,dispatchActions) (weh(ContactInfo,axios))

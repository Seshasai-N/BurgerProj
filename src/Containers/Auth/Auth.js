import React, { Component } from 'react'
import Input from '../../Components/Ui/Input/Input'
import Button from '../../Components/Ui/Button/Button'
import { connect } from 'react-redux'
import './Auth.css'
import Spinner from '../../Components/Ui/Spinner/Spinner'
import * as authActions from '../../Store/Actions/index'
import {Redirect} from 'react-router-dom'

class Auth extends Component {
    state = {
        signup: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'UserName'
                },
                value: '',
                validation: {
                    required: true
                }, valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true
                }, valid: false,
                touched: false,
                minLenght: 5,
            }
        },
        isSignin:true
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
    changehandler = (event, identifier) => {
        const clone = {
            ...this.state.signup
        }
        const updatedinput = {
            ...clone[identifier]
        }
        updatedinput.value = event.target.value
        if (updatedinput.validation) {
            updatedinput.valid = this.checkValidator(updatedinput.value, updatedinput.validation)
            updatedinput.touched = true
        }
        clone[identifier] = updatedinput
        this.setState({ signup: clone })
    }
submit=(event)=>{
    event.preventDefault();
    this.props.onAuth(this.state.signup.email.value,this.state.signup.password.value,this.state.isSignin)
    this.props.history.push('/burger')
       
}
switchSigin=()=>{
    this.setState(prevState=>{
        return{isSignin:!prevState.isSignin}
    })

}


    render() {
        let authredirect=null
        if(this.props.isAuth){
            authredirect=<Redirect to ='/burger' />
        }
        const formElements = []
        for (let ele in this.state.signup) {
            formElements.push({
                id: ele,
                config: this.state.signup[ele]
            })
        }
        let form = (<form onSubmit={this.submit}>
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

if(this.props.loading){
    form =<Spinner/>
}
let error=null
if(this,this.props.error){
    error=(
    <p>'UserName  must exist'</p>
    )
}
        return (
            <div className='Signup'>
                {authredirect}
                {form}
                {error}
                <Button btnType='Danger' clicked={this.switchSigin} >Switch To {this.state.isSignin?'Sigin':'Signup'}</Button>
            </div>
        )
    }
}
const mapProps=state=>{
    return{
        loading:state.auth.loading,
        error:state.auth.error,
        isAuth:state.auth.token!==null
    }
}
const dispatchActions = dispatch => {
    return {
        onAuth: (email, password,isSign) => dispatch(authActions.login(email, password,isSign))
    }

}

export default connect(mapProps, dispatchActions)(Auth)
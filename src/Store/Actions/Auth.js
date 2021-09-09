import * as actionTypes from './actionTypes'
import axios from 'axios';

export const login = (email,password,isSigin) => {
    return dispatch => {
        dispatch(loginStart())
       const authData={
           email,
           password,
           returnSecureToken:true

       }
       let url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdQkVIwyLahyCt4JfDnrYxE-_Pvebby4c'
       if(isSigin){
           url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdQkVIwyLahyCt4JfDnrYxE-_Pvebby4c'
       }

        axios.post(url,authData).
        then(res=>{
           
            dispatch(loginSuccess(res.data.idToken,res.data.localId))
        })
        .catch(error=>{
           
            dispatch(loginFail(error))
        })
       
    }
}
export const loginSuccess = (idToken,userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken,
        userId
    }
}
export const loginFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    }
}

export const loginStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}
export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}
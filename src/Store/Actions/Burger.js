import * as actionTypes from './actionTypes'
import axios from '../../axios.oders';
export const addIngredient =(name)=>{
    return{
        type:actionTypes.ADD_INGREDIENT,
        ingredient:name
    }

}

export const removeIngredient =(name)=>{
    return{
        type:actionTypes.REMOVE_INGREDIENT,
        ingredient:name
    }

}
export const setIngredient =(ingredients)=>{
    return{
        type: actionTypes.SET_INGREDIENT,
        ingredients
    }
}
export const fetchIngredient = () =>{
    return dispatch=>{
        axios.get('https://my-burger-react-a6da3.firebaseio.com/ingredients.json').then(response => {
           dispatch(setIngredient(response.data))
         }).catch(error=>{
            
         })
    }
}
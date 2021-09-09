import * as actionTypes from '../Actions/actionTypes'

const initialState = {
    ingredients: null,
    totalprice: 4,
    error: false,
    loading: true
};
const Ingerdients_prices = {
    salad: 1,
    bacon: 2,
    cheese: 1,
    meat: 2,
    red:1
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredient]:state.ingredients[action.ingredient]+1
                },
                totalprice: state.totalprice+ Ingerdients_prices[action.ingredient]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredient]:state.ingredients[action.ingredient]-1
                },
                totalprice: state.totalprice- Ingerdients_prices[action.ingredient]
            };
            case actionTypes.SET_INGREDIENT:
                return{
                    ...state,
                    ingredients:action.ingredients,
                    totalprice: 4,
                    loading:false
                }
        default:
            return state

    }
}

export default reducer
import * as actionTypes from '../Actions/actionTypes'

const intialState = {
    orders: [],
    loading: false,
    purchased: false
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASEBURGER_INIT:
            return {
                ...state,
                purchased: false

            }
        case actionTypes.PURCHASEBURGER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.PURCHASE_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId,

            }
            return {
                ...state,
                loading: false,
                purchased: true,
                orders: state.orders.concat(newOrder)
            }
        case actionTypes.PURCHASE_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: ['hii', 'jkil'],
                loading: false
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}
export default reducer
import * as actionTypes from './actionTypes'
import axios from '../../axios.oders';

export const purchaseSuccess = (id, oderData) => {
    return {
        type: actionTypes.PURCHASE_SUCCESS,
        orderId: id,
        orderData: oderData
    }
}
export const purchase = (error) => {
    return {
        type: actionTypes.PURCHASE_FAIL,
        error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASEBURGER_START
    }
}
export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart())
        axios.post('/oders.json', orderData).then(
            response => {
                dispatch(purchaseSuccess(response.data.name, orderData))
            }
        ).catch = (error => {
            dispatch(purchase(error))
        })
    }
}
export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASEBURGER_INIT
    }
}

export const fetchodersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchodersSuccess = (oders) => {
    
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: oders
    }
}
export const fetchodersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error
    }
}

export const fetchoders = (tokken) => {
    return dispatch => {
        dispatch(fetchodersStart())
        axios.get('/oders.json?auth=',tokken).then(res => {
            const fetched = []
            for (let key in res.data) {
                fetched.push({
                    ...res.data[key],
                    id: key,

                })
            }

            dispatch(fetchodersSuccess(fetched))

        }).catch(err => {
            dispatch(fetchodersFail(err))
        })
    }
}


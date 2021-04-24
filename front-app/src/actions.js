import {CHANGE_ROUTE, ADD_TO_CART} from './constants';
export const setRoute = (text) =>({
    type:CHANGE_ROUTE,
    payload: text
})
export const setBucket = (product) =>({
    type:ADD_TO_CART,
    payload: product
})
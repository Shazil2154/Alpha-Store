import {CHANGE_ROUTE, ADD_TO_CART} from './constants';
const initialStateRoute = {
    route: 'home'
}
export const currentRoute = (state=initialStateRoute, action={}) => {
    switch(action.type){
        case CHANGE_ROUTE:
            return {
                ...state,
                route:action.payload
            }
        default:
            return state;
    }
}
const initialStateBucket = {
    bucket: []
}
export const currentBucket = (state=initialStateBucket,action={}) => {
    switch (action.type) {
        case ADD_TO_CART:
            return{
                ...state,
                bucket:[...state.bucket, action.payload]
            }
        default:
            return state;
    }
}
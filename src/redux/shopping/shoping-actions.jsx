import * as ACTIONS from './shopping-types';

export const addToCart = (itemId)=>{
    return{
        type: ACTIONS.ADD_TO_CART,
        payload: {
            id: itemId
        }
    }
}

export const removeFromCart = (itemId)=>{
    return{
        type: ACTIONS.REMOVE_FROM_CART,
        payload: {
            id: itemId
        }
    }
}

export const adjustQty = (itemId, value)=>{
    return{
        type : ACTIONS.ADJUST_QTY,
        payload:{
            id: itemId,
            qty: value
        }
    }
}

export const loadCurrentItem = (item)=>{
    return{
        type: ACTIONS.LOAD_CURRENT_ITEM,
        payload: item
    }
}
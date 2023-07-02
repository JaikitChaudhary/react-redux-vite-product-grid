import { ADD_TO_CART, DELETE_TO_CART, SHOW_CART, UPDATE_TO_CART } from "../types/cart.type"

export const showCart = (showCartBool) => ({
  type: SHOW_CART,
  payload: showCartBool,
});
export const addToCart=(product)=>({
    type:ADD_TO_CART,
    payload:product
})
export const updateToCart=(product)=>({
    type:UPDATE_TO_CART,
    payload:product
})
export const deleteToCart=(product)=>({
    type:DELETE_TO_CART,
    payload:product
})
import { createSelector } from 'reselect';


const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart] ,
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsQuantity = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulatorQuantity, cartItem) => { 
        return accumulatorQuantity + cartItem.quantity 
    }, 0)
)
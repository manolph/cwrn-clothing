import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';


const CartDropdown = ({ cartItems, history, dispatch }) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {   cartItems.length ?
                        cartItems.map(cartItem => {
                        return <CartItem key={cartItem.id} item={cartItem} />
                }): <span className="empty-message">Your Cart Is Empty!</span>
                }
            </div>
        <CustomButton onClick={
                 () => {
                        history.push('/checkout');
                        dispatch(toggleCartHidden());
                     } 
                }>GO TO CHECKOUT</CustomButton>
    </div>    
    );
}


const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems 
})


export default withRouter(connect(mapStateToProps)(CartDropdown));
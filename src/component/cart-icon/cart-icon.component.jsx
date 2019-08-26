import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import './cart-icon.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsQuantity } from '../../redux/cart/cart.selector';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingBag className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsQuantity
})

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
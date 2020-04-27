import React from 'react';

// Components

// Styles
import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <span className='name'>{name}</span>
        <span className='name'>
            {quantity} x ${price}
        </span>
    </div>
)

export default CartItem;
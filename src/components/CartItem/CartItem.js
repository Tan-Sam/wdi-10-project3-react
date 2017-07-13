import React, { PropTypes } from 'react';
import './CartItem.css';

const CartItem = ({ name, price, currency, qty, subtotal }) => {
  return (
    <div className="cart-item row">
      <div className="name col-md-5">{name}</div>
      <div className="price col-md-2">$ <strong>{price}</strong></div>
      <div className="qty col-md-2">{qty}</div>
      <div className="subtotal col-md-3">$ <strong>{price * qty}</strong></div>
    </div>
  );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
}

export default CartItem;

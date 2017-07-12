import React, { PropTypes } from 'react';
import './CartItem.css';

const CartItem = ({ name, price, currency }) => {
  return (
    <div className="cart-item row">
      <div className="name col-md-4">{name}</div>
      <div className="name col-md-2">{currency}</div>
      <div className="name col-md-2">{price}</div>
      {/*<span className="cart-item__name">{name}</span>
      <span className="cart-item__price">{price} {currency}</span>*/}
    </div>
  );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
}

export default CartItem;

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { getItems, getCurrency, getTotal } from '../../reducers/cartReducer';
import CartItem from '../CartItem/CartItem';

import './Cart.css';

const Cart = ({ items, total, currency }) => {
    return (
        <div>
            <h3>POS Screen Tally</h3>
            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <ol>
                                {items.map(item => (
                                  <li key={item.id}>
                                    <CartItem {...item} />
                                  </li>
                                ))}
                            </ol>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart__total">Total: {total} {currency}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
}

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props)
    }
}

export default connect(mapStateToProps)(Cart);

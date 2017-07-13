import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// eslint-disable-next-line
import {
  getItems,
  getCurrency,
  getTotal,
  removeAllFromCart
 } from '../../reducers/cartReducer';
import CartItem from '../CartItem/CartItem';

import './Cart.css';

const Cart = ({ items, total, currency }) => {

  const onClick = (e) => {
    console.log("Txbutton clicked. ");

    const itemsWithSubtotal = items.map((e) => {
      e.subtotal = e.qty * e.price;
      return e;
    });

    const postContent = {
      transaction: {
        items: itemsWithSubtotal,
        total,
        txTime: new Date()}
      };

    console.log(postContent);
    axios.post('/apiTransaction', postContent)
      .then((response) => {
        console.log('apiTransaction responded' ,response.data);

        removeAllFromCart();

      })
      .catch((err) => {
        console.log('apiTransaction error: ', err);
      });


  }
    return (
        <div>
            <h3>POS Screen Tally</h3>
            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {
                          items.length > 0 &&
                          (<div>
                            <div className="cart-item row headers">
                              <div className="name col-md-5">Item</div>
                              <div className="name col-md-2">$ Price</div>
                              <div className="name col-md-2">Qty</div>
                              <div className="name col-md-3">$Sub-total</div>
                            </div>
                            <ol>
                              {items.map((item, index) => (
                                <li key={item.id}>
                                  <CartItem {...item} index={index+1}/>
                                </li>
                              ))}
                            </ol>
                          </div>)
                        }
                        {
                          items.length === 0 &&
                          (<div className="alert alert-info">Cart is empty</div>)
                        }

                        <div className="cart__total" onClick={onClick}>
                          Total: {total} {currency}
                          {
                            (total === 0)? "":
                            <span className="txCompleteButton glyphicon glyphicon-ok"/>
                          }
                        </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeAllFromCart: () => dispatch(removeAllFromCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

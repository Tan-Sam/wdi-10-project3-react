import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// eslint-disable-next-line
import { getItems, getCurrency, getTotal } from '../../reducers/cartReducer';
import CartItem from '../CartItem/CartItem';

import './Cart.css';



const Cart = ({ items, total, currency }) => {


  console.log("clicked buttosdvgaduhvgadyufgvaduyfgn");
  console.log(items);
  axios.post('/apiTransaction/items', items)
    .then((response) => {
      console.log('i was responded' ,response.data);
    });




  const onClick = (e) => {
    console.log("clicked button");
    console.log(items);
    axios.post('/apiTransaction/items', items)
      .then((response) => {
        console.log('i was responded' ,response.data);
      })
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
                              {items.map(item => (
                                <li key={item.id}>
                                  <CartItem {...item} />
                                </li>
                              ))}
                            </ol>
                          </div>)
                        }
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}

                        <div className="cart__total" onClick={onClick}>
                          Total: {total} {currency}
                          <span className="txCompleteButton glyphicon glyphicon-ok"
                                />
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

export default connect(mapStateToProps)(Cart);

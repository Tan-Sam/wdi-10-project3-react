import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// eslint-disable-next-line
import {
  getItems,
  getCurrency,
  getTotal,
  removeAllFromCart,
  removeAllItemsFromCart
 } from '../../reducers/cartReducer';
import CartItem from '../CartItem/CartItem';

import './Cart.css';

// const

class Cart extends React.Component {
// = ({ items, total, currency}) => {

  constructor(props){
    super(props);


  }

  onClick = (e) => {

const { items, total, currency} = this.props;

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


    const {removeAllFromCart} = this.props;

    let axiosInstance = axios.create();
    axiosInstance.defaults.timeout = 1200;

    // // working
    // removeAllFromCart();
    // console.log(postContent);
    axiosInstance.post('/apiTransaction', postContent)
      .then((response) => {
        console.log('apiTransaction responded');
        alert('success');
        removeAllFromCart();
      })
      .catch((err) => {
        console.log('apiTransaction error: ', err);
        alert('error');
        removeAllFromCart();
      });
  }
  render(){

    const { items, total, currency} = this.props;
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

                        <div className="cart__total" onClick={this.onClick}>
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
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeAllFromCart: PropTypes.func.isRequired,
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
    // addToCart: (id) => dispatch(addToCart(id)),
    removeAllFromCart: () => dispatch(removeAllItemsFromCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

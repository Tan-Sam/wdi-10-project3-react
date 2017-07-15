import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  addToCart,
  removeFromCart,
  removeAllFromCart,
  isInCart } from '../../reducers/cartReducer';

import './Product.css';

class Product extends Component {

    constructor(props){
      super(props);

      this.state = {
        productCount: 0
      }
    }

    /*
     *  remove button clicked
     */
      removeItemClicked = (e) => {
      e.preventDefault();
      // console.log(e.target.name);

      // eslint-disable-next-line
      const { id, addToCart, removeFromCart, removeAllFromCart, isInCart } = this.props;


      if (e.target.name === 'minusOne') {
        let newProductCount = this.state.productCount;

        newProductCount--;

        if (newProductCount < 0 ) {
          newProductCount = 0;
        }

        this.setState({
          productCount: newProductCount
        });

        removeFromCart(id);
      }else if (e.target.name === 'minusAll') {

        this.setState({
          productCount: 0
        });

        removeAllFromCart(id);
      }
    }

    // add item qty.
    pictureClicked = (e) => {
        e.preventDefault();

        this.props.addToCart(this.props.id);

        this.setState({
          productCount: this.state.productCount+1
        });
    }

    render() {
      // eslint-disable-next-line
        const { name, price, currency, image, url, isInCart, qty } = this.props;

        const isInCartOnot = this.state.productCount > 0;
        const moreThanOne = this.state.productCount > 1;

        return (
            <div className="product thumbnail" >
                <img src={image} alt="product" onClick={this.pictureClicked}/>
                <div className="caption">
                    <h3>
                        <a href={url}>{name}</a>
                    </h3>
                    <div className="product__price">
                      <strong className="dPrice">{price}</strong> {currency}
                    </div>
                    {
                      isInCartOnot?
                      <span className="qtySpan">{this.state.productCount}</span>:""
                    }
                    <div className="product__button-wrap">
                        <button
                            name="minusAll"
                            className={moreThanOne ? 'btn btn-danger' : 'donshow'}
                            onClick={this.removeItemClicked}>
                            {moreThanOne ? '- All' : ''}
                        </button>
                        <button
                            name="minusOne"
                            className={isInCartOnot ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.removeItemClicked}>
                            {isInCartOnot ? '- 1' : ''}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    removeAllFromCart: PropTypes.func.isRequired,
}

const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    removeAllFromCart: (id) => dispatch(removeAllFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);

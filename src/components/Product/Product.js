import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  addToCart,
  removeFromCart,
  isInCart } from '../../reducers/cartReducer';

import './Product.css';

class Product extends Component {

  constructor(props){
    super(props);

    this.state = {
      productCount: 0
    }
  }

    handleClick = (e) => {
      e.preventDefault();

      let newProductCount = this.state.productCount;

      newProductCount--;

      if (newProductCount < 0 ) {
        newProductCount = 0;
      }

      this.setState({
        productCount: newProductCount
      });

      console.log(this.props.name, 'handleClick: ', this.state.productCount);

        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
          
            addToCart(id);
        }
    }

    pictureClicked = (e) => {
        e.preventDefault();

        this.setState({
          productCount: this.state.productCount+1
        });

        console.log(this.props.name, 'pictureClicked: ', this.state.productCount);
    }

    render() {
        const { name, price, currency, image, url, isInCart } = this.props;

        return (
            <div className="product thumbnail" >
                <img src={image} alt="product" onClick={this.pictureClicked}/>
                <div className="caption">
                    <h3>
                        <a href={url}>{name}</a>
                    </h3>
                    <div className="product__price">{price} {currency}</div>
                    <div className="product__button-wrap">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to POS'}
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
}

const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);

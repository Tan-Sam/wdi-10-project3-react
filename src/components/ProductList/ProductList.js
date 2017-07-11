import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Product from '../Product/Product';

import { getProducts } from '../../reducers/productsReducer';

import './ProductList.css';

const ProductList = ({ products }) => {
    return (
        <div>
            <h3>Products</h3>
            <ul className="product-list">
              {products.map(product => (
                  <li key={product.id} className="product-list__item">
                    <Product {...product} />
                  </li>
              ))}
            </ul>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props)
    }
}

export default connect(mapStateToProps)(ProductList);

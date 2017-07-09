import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { getProducts } from '../reducer/products';

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props)
    }
}

export default connect(mapStateToProps)(ProductList);

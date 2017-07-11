import React, {PropTypes} from 'react';

import Cart from '../../components/Cart/Cart';
import ProductList from '../ProductList/ProductList';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NumberPad from '../NumberPad/NumberPad.js';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const plist = true? <ProductList />:<NumberPad />;

    return (
      <div className="container">
          <Header />
          <div className="row">
              <div className="col-md-4">
                  <Cart/>
              </div>
              <div className="col-md-8">
                {plist}
              </div>
          </div>
          <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
}

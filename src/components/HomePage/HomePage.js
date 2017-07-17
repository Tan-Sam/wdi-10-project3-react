import React, {PropTypes} from 'react';

import Cart from '../../components/Cart/Cart';
import ProductList from '../ProductList/ProductList';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NumberPad from '../NumberPad/NumberPad.js';

import {connect} from 'react-redux';

import {getCurrentOperation} from '../../reducers/currentOperationReducer';

export class HomePage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {

    const {currentOperation} = this.props
    const plist = (currentOperation === 'salesRegistration')? <ProductList />:<NumberPad />;

    console.log(currentOperation);

    return (
      <div className="container">

          <Header />
          <div className="row">
              <div className="col-md-5">
                  <Cart/>
              </div>
              <div className="col-md-7">
                {plist}
              </div>
          </div>
          <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  currentOperation: PropTypes.string
}

const mapStateToProps = (state) => {
  return{
    currentOperation: getCurrentOperation(state)
  }
}

export default connect(mapStateToProps)(HomePage);

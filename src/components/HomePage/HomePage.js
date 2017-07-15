import React, {PropTypes} from 'react';

import Cart from '../../components/Cart/Cart';
import ProductList from '../ProductList/ProductList';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NumberPad from '../NumberPad/NumberPad.js';



export default class HomePage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {

    const plist = true? <ProductList />:<NumberPad />;

    return (
      <div className="container">


      <div className="modal fade in" id="myModal" role="dialog">
    <div className="modal-dialog">

      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">×</button>
          <h4 className="modal-title">Modal Header</h4>
        </div>
        <div className="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>


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

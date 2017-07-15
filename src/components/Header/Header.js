import React from 'react';
import {Link} from 'react-router-dom';

import Sales from '../Sales/Sales';

import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className="row">
          <div className="col-md-12">
              <h1 className="header-h1">KSM POS Sample-Example</h1>
              <h3 className="header-h3">
              {/*<Link to="/sales">sales report</Link>*/}
              <Link to="/sales">sales report</Link>
              </h3>
          </div>
      </div>
    );
  }
}

// Header.propTypes = {
// };

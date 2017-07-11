import React, {PropTypes} from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="row">
          <div className="col-md-12">
              <h1>KSM POS Sample-Example</h1>
          </div>
      </div>
    );
  }
}

Header.propTypes = {
};

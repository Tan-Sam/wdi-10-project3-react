import React, {PropTypes} from 'react';

export default class NumberPad extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="container">
              <div className="row">
                <div className="col-md-4">
                  <button>1</button>
                </div>
                <div className="col-md-4">
                  <button className="btn btn-primary">2</button>
                </div>
                <div className="col-md-4">
                  <button>3</button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <button>4</button>
                </div>
                <div className="col-md-4">
                  <button>5</button>
                </div>
                <div className="col-md-4">
                  <button>6</button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <button>7</button>
                </div>
                <div className="col-md-4">
                  <button>8</button>
                </div>
                <div className="col-md-4">
                  <button>9</button>
                </div>
              </div>
            </div>);
  }
}

NumberPad.propTypes = {
};

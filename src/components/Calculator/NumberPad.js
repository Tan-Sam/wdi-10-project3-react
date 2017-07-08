import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import './NumberPad.css';

import {updateAmtKeyedIn} from '../../actions/numberPadAction';
// import numberPadAction from '../../actions/numberPadAction';

export class NumberPad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amtKeyedIn: ""
    };

    this.numPadArray = [
      [1,2,3,10],
      [4,5,6,20,"X"],
      [7,8,9,`.`,"T"],
    ];
  }

  onClick = (e) => {
    const input = e.target.innerText;
    const prevValue = this.state.amtKeyedIn;
    const newValue = (input === "X")? "": (prevValue + input);

    console.log("value before set state: "+this.state.amtKeyedIn);
     this.setState({
       amtKeyedIn: newValue,
     });
    this.props.keyedAmtChanged(newValue);
    console.log("value after: "+this.state.amtKeyedIn);
  }

  // todo:
  getBootstrapColumns = (colSize) => {
    return "col-md-xx col-xs-xx col-lg-xx col-sm-xx"
              .replace(/xx/g, colSize);
  }

  numElements = (row) => {
    return row.map((elem) => {
      const isXbutton = (elem === "X")? " clearValues":"";
      return (<div className={this.getBootstrapColumns(`3`) + isXbutton}
                   onClick={this.onClick}>{elem}</div>);
    });
  }

  numRows = () => {
    return this.numPadArray.map((row) => {
      return (
        <div className="row">{this.numElements(row)}</div>
      );
    });
  }

  render() {
    return (<div className="container">
              {this.numRows()}
            </div>);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    keyedAmtChanged: (amtKeyedIn) => {
      dispatch(updateAmtKeyedIn(amtKeyedIn));
    }
  }
}

NumberPad.propTypes = {
};

export default connect(null, mapDispatchToProps)(NumberPad);

import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import './NumberPad.css';

// import {updateAmtKeyedIn} from '../../actions/numberPadAction';
import {updateAmtKeyedAction} from '../../actions/numPadAction';

export class NumberPad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amtKeyedIn: ""
    };

    this.numPadArray = [
      [7,8,9,10],
      [4,5,6,20,"X"],
      [1,2,3,"T"],
      [0,`.`]
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

  getBootstrapColumns = (colSize) => {
    return "col-md-xx col-xs-xx col-lg-xx col-sm-xx "
              .replace(/xx/g, colSize);
  }

  // doesn't work. margins also not working
  getBootstrapColOffset = (colSize) => {
    return "col-md-offset-xx col-xs-offset-xx col-lg-offset-xx col-sm-offset-xx "
              .replace(/xx/g, colSize);
  }

  //  process & return html col/cell elements
  numElements = (row) => {
    return row.map((elem) => {
      const isXbutton = (elem === "X")? "clearValues ":"";
      const isTwoDigits = (elem >= 10)? "2digits ":"";
      const isfourthCol = (row.indexOf(elem) === 3)? this.getBootstrapColOffset(`1`):"";

      if(elem === `T`){
          elem = (<span className="glyphicon glyphicon-ok"></span>);
      }

      return (<div key={row.indexOf(elem)}
                   onClick={this.onClick}
                   className={this.getBootstrapColumns(`2`) +
                                   isXbutton +
                                   isTwoDigits +
                                   isfourthCol}>{elem}</div>);
    });
  }

  //  process & return html row elements
  numRows = () => {
    return this.numPadArray.map((row) => {
      return (
        <div className="row"
             key={this.numPadArray.indexOf(row)}>{this.numElements(row)}</div>
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
    keyedAmtChanged: (keyedInAmt) => {
      dispatch(updateAmtKeyedAction(keyedInAmt));
    }
  }
}

NumberPad.propTypes = {
};

export default connect(null, mapDispatchToProps)(NumberPad);

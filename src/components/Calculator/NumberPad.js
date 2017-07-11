import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import {updateAmtKeyedAction} from '../../actions/numPadAction';
import {updateTxCompleted} from '../../actions/txCompletedAction';
import {updateCurrentOperation} from '../../actions/currentOperationAction';

import {getClassNames} from '../../apis/numberPadAPI';

export class NumberPad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amtKeyedIn: "",
      txCompleted: false
    };

    this.numPadArray = [
      [7,8,9,10],
      [4,5,6,20],
      [1,2,3,"X"],
      [0,`.`,"T"]
    ];

    this.props.operationLoaded();
  }

  componentDidUnmount(){
    this.props.operationUnLoaded();
  }

  onClick = (e) => {

    if (e.target.className.includes('glyphicon-ok')) {
      this.setState({
        txCompleted: true,
      });
      this.props.txCompleted();
    }else {
        const input = e.target.innerText;
        const prevValue = this.state.amtKeyedIn;
        const newValue = (input === "X")? "": (prevValue + input);

        this.setState({
         amtKeyedIn: newValue,
        });
        this.props.keyedAmtChanged(newValue);
    }
  }

  //  set bootstrap grid-col class programmatically.
  //  Saves time by changing 1 field, instead of editing html 1 by 1.
  getBootstrapColumns = (colSize) => {
    return "col-md-xx col-xs-xx col-lg-xx col-sm-xx "
              .replace(/xx/g, colSize);
  }

  // doesn't work. margins also not working
  // getBootstrapColOffset = (colSize) => {
  //   return "col-md-offset-xx col-xs-offset-xx col-lg-offset-xx col-sm-offset-xx "
  //             .replace(/xx/g, colSize);
  // }

  //  process & return html col/cell elements
  numElements = (row) => {
    return row.map((elem) => {

      // x button css formatting
      const isXbutton = (elem === "X")? "clearValues ":"";

      //  center text for 2-digits
      const isTwoDigits = (elem >= 10)? "2digits ":"";
      // const isfourthCol = (row.indexOf(elem) === 3)?
      //            this.getBootstrapColOffset(`1`):"";

      //  set green tick for operation completed.
      if(elem === `T`){
          elem = (<span name='tick' className="glyphicon glyphicon-ok"></span>);
      }

      return (<div key={row.indexOf(elem)}
                   onClick={this.onClick}
                   className={getClassNames(`1`,elem)}>{elem}</div>);
    });
  }

  //  process & return html row elements
  numRows = () => {
    return this.numPadArray.map((row) => {
      return (
        <div key={this.numPadArray.indexOf(row)}
             className="row">
           {this.numElements(row)}
        </div>
      );
    });
  }

  render() {
    return (<div className="container">
              <a href="/">Go to home</a>
              {this.numRows()}
            </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    // todo tx completed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    keyedAmtChanged: (keyedInAmt) => {
      dispatch(updateAmtKeyedAction(keyedInAmt));
    },
    txCompleted: () => {
        dispatch(updateTxCompleted());
    },
    operationLoaded: () => {
      dispatch(updateCurrentOperation('changeRegistration'));
    },
    operationUnLoaded: () => {
      dispatch(updateCurrentOperation('salesRegistration'));
    }
  }
}

NumberPad.propTypes = {
};

export default connect(null, mapDispatchToProps)(NumberPad);

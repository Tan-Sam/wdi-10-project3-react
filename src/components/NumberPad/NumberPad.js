import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import {updateAmtKeyedAction} from '../../actions/numPadAction';
import {updateTxCompleted} from '../../actions/txCompletedAction';
import {updateCurrentOperation} from '../../actions/currentOperationAction';

import {getClassNames} from '../../apis/numberPadAPI';

import './NumberPad.css';

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

  //  process & return html col/cell elements
  numElements = (row) => {
    return row.map((elem) => {

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

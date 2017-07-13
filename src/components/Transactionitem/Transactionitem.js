import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Transactionitem.css'

export class Transactionitem extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className='itemName col-md-6'>{this.props.date.slice(0,10)}</div>
        <div className='itemQuantity col-md-6'>${this.props.total}</div>
      </div>
  );
  }
}

export default Transactionitem;

import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

// import Inventoryitem from '../Inventoryitem/Inventoryitem';
// import {readInventory} from '../../actions/inventoryActions';
import { connect } from 'react-redux';
import Transactionitem from '../Transactionitem/Transactionitem';
import './Sales.css'

export class Sales extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions:[],
    }
  }

  componentDidMount() {
    axios.get('/apiTransaction/')
      .then ((response) => {
          this.setState({
            transactions: response.data
          })
          console.log(this.state.transactions);

      })
      .catch ((error) => {
        console.log(error);
      });
  }

  addItems = () => {
      return this.state.transactions.map((item) => {
        return ( <Transactionitem item={item} key={ item._id } total={item.total} date={item.txTime} /> )
      });
    }

  grandSales = () => {
      return this.state.transactions.reduce((acc, item) => {
        return acc += item.total
      },0);
  }

  render() {
    return (
      <div id='inventoryList'>
        <div className='header'>Sales</div>
        <div className='title col-md-6'>Date:{this.state.transactions.total}</div>
        <div className='title col-md-6'>Total Sales</div>
        {this.addItems()}
        <div className='totalSales'>Grand Sales:${this.grandSales()}</div>
        <div>
          <button>
            <Link to='/'>Back to POS</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Sales;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumberPad from '../Calculator/NumberPad';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Number Pad</h2>
        </div>
        <NumberPad/>
      </div>
    );
  }
}

export default App;

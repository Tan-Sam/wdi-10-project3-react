import React, { Component } from 'react';
import {Switch} from 'react-router';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import NumberPad from '../Calculator/index';
import Cart from '../Cart/Cart';
import NotFound from '../NotFound/NotFound';

import HomePage from '../testings/link';
import Numpadlink from '../testings/numpadlink';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Number Pad</h2>
          {/*<HomePage />*/}
        </div>
        <div>
        <Router>
            <Switch>
              {/*/ Exact path is important if not any how also hit./ */}
              <Route exact path="/" component={Numpadlink}/>
              <Route exact path="/numberpad" component={NumberPad}/>
              <Route component={NotFound}/>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;

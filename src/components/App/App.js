import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'

// import {Router} from 'react-router';


// eslint-disable-next-line
import NumberPad from '../NumberPad/NumberPad';
import HomePage from '../HomePage/HomePage';
import NotFound from '../NotFound/NotFound';
import Sales from '../Sales/Sales';
import LoginPage from '../pages/LoginPage.react';


const App = () => {



    return (
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/sales" component={Sales}/>
              {/*<Route exact path="/login" component={LoginPage}/>*/}
              <Route component={NotFound}/>
            </Switch>
          </Router>
        </div>
    );
}

export default App;

<<<<<<< HEAD
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Products, Cart } from './containers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';
import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
>>>>>>> 8936ce74aa2992d75a313d85953f58e2105f391c

const store = createStore(reducers);
ReactDom.render(
  <Provider store={store}>
    <div className="container">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Simple POS System</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
      <Grid>
        <Row>
          <Col md={6}>
            <h1>Products</h1>
            <Products/>
          </Col>
          <Col md={4}>
            <h1>KSM POS system</h1>
            <Cart/>
          </Col>
        </Row>
      </Grid>
    </div>

  </Provider>,
  document.getElementById('app')
);

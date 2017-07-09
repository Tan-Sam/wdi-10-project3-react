// modules/libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import {createStore} from 'redux';
//  local imports
import './index.css';
import App from './components/App/App';
import {initStore} from './store/store';
import registerServiceWorker from './registerServiceWorker';


const store = initStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

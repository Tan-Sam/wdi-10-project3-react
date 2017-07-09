// modules/libraries
import React from 'react';
// <<<<<<< HEAD
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
// =======
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
// import cartReducer from './reducer/cart';
// import productsReducer from './reducer/products';
// import App from './App';
// import productsData from './data/products';
// import 'bootstrap/dist/css/bootstrap.css';
//
// const rootReducer = combineReducers({
//     cart: cartReducer,
//     products: productsReducer
// });
//
// let store = createStore(
//     rootReducer,
//     {
//         products: productsData // initial store values
//     },
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
// );
//
// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );
// >>>>>>> 913d10dfd64fb9874374a85a7bd1eb4865a688db

import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers,
         createStore } from 'redux';

import App from './components/App/App';
// import 'bootstrap/dist/css/bootstrap.css';

import {initStore} from './store/store';



// import productsData from './data/products';
// import cartReducer from './reducers/cart';
// import productsReducer from './reducers/products';

// const rootReducer = combineReducers({
//     cart: cartReducer,
//     products: productsReducer
// });

// let store = createStore(
//     rootReducer,
//     {
//         products: productsData // initial store values
//     },
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
// );
//
let store = initStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

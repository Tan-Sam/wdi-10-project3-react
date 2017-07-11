import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose,
  bindActionCreators } from 'redux';
import thunk from 'redux-thunk';

import NumberPadReducer from '../reducers/numPadReducer';
import txCompletedReducer from '../reducers/txCompletedReducer';
import currentOperationReducer from '../reducers/currentOperationReducer';
// import txCompletedReducer from '../reducers/txCompletedReducer';

// import cartReducer from './reducers/cart';
// import productsReducer from './reducers/products';


// import {
//   cart as cartReducer,
//   products as productsReducer,
//
//   currentOperation as currentOperationReducer,
//   amtKeyedIn as amtKeyedInReducer,
//   txCompleted as txCompletedReducer
// } from '../reducers/index';

export let initStore = () => {
  const reducer = combineReducers({
    // cart: cartReducer,
    // products: productsReducer,

    amtKeyedIn: NumberPadReducer,
    txCompleted: txCompletedReducer,
    currentOperation: currentOperationReducer
  });

  const store = createStore(reducer,
                            compose(applyMiddleware(thunk),
                                    window.devToolsExtension?
                                      window.devToolsExtension():
                                      f=>f));
  return store;
}

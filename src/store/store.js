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

import productsData from '../data/products';
import cartReducer from '../reducers/cartReducer';
import productsReducer from '../reducers/productsReducer';

export let initStore = () => {
  const reducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,

    amtKeyedIn: NumberPadReducer,
    txCompleted: txCompletedReducer,
    currentOperation: currentOperationReducer
  });

  const store = createStore(reducer,
                            {
                              products: productsData // initial store values
                            },
                            compose(applyMiddleware(thunk),
                                    window.devToolsExtension?
                                      window.devToolsExtension():
                                      f=>f));
  return store;
}

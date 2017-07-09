import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose,
  bindActionCreators } from 'redux';
import thunk from 'redux-thunk';

import NumberPadReducer from '../reducers/numPadReducer';
import txCompletedReducer from '../reducers/txCompletedReducer';

export let initStore = () => {
  const reducer = combineReducers({
    amtKeyedIn: NumberPadReducer,
    currentOperation: txCompletedReducer
  });

  const store = createStore(reducer,
                            compose(applyMiddleware(thunk),
                                    window.devToolsExtension?
                                      window.devToolsExtension():
                                      f=>f));
  return store;
}

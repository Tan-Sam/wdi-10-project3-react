import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose,
  bindActionCreators } from 'redux';
import thunk from 'redux-thunk';

import NumberPadReducer from '../reducers/numberPadReducer';

export let initStore = () => {
  const reducer = combineReducers({
    amtKeyedIn: NumberPadReducer
  });

  const store = createStore(reducer,
                            compose(applyMiddleware(thunk),
                                    window.devToolsExtension?
                                      window.devToolsExtension():
                                      f=>f));
  return store;
}

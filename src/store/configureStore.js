import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import coinmarketcapReducer from '../reducers/coinmarketcapReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
        coinmarketcap: coinmarketcapReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
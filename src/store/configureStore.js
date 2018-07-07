import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import matchesReducer from '../reducers/matches';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      matches: matchesReducer
    }),
    composeEnchancers(applyMiddleware(thunk))
  );
  return store;
};

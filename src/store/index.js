import { createStore, combineReducers } from 'redux';
import stockReducer from './reducers/stockReducer';
import currencyReducer from './reducers/currencyReducer';
import searchReducer from './reducers/searchReducer';

const rootReducer = combineReducers({
  stockReducer,
  currencyReducer,
  searchReducer,
});

const store = createStore(rootReducer);

export default store;

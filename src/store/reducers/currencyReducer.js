import {
  UPDATE_CURRENCY_LIST,
  SET_DETAILED_CURRENCY,
  DELETE_DETAILED_CURRENCY } from '../actions/types';

const initialState = {
  currencyList: [],
  detailedCurrency: {},
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENCY_LIST:
      return {
        ...state,
        currencyList: action.payload,
      };
    case SET_DETAILED_CURRENCY:
      return {
        ...state,
        detailedCurrency: action.payload,
      };
    case DELETE_DETAILED_CURRENCY:
      return {
        ...state,
        detailedCurrency: {},
      };
    default:
      return state;
  }
};

export default currencyReducer;

import {
  UPDATE_CURRENCY_LIST,
  SET_DETAILED_CURRENCY,
  DELETE_DETAILED_CURRENCY } from '../actions/types';


export const updateCurrencyList = (currencyList) => (
  {
    type: UPDATE_CURRENCY_LIST,
    payload: currencyList,
  }
);

export const setDetailedCurrency = (currency) => (
  {
    type: SET_DETAILED_CURRENCY,
    payload: currency,
  }
);

export const deleteDetailedCurrency = () => (
  {
    type: DELETE_DETAILED_CURRENCY,
  }
);

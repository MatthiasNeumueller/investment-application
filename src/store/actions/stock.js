import {
  ADD_STOCK,
  DELETE_STOCK,
  UPDATE_STOCK,
  SET_STOCK_LIST,
  SET_DETAILED_STOCK,
  DELETE_DETAILED_STOCK } from '../actions/types';


export const addStock = (stock) => (
  {
    type: ADD_STOCK,
    payload: stock,
  }
);

export const deleteStock = (symbol) => (
  {
    type: DELETE_STOCK,
    payload: symbol,
  }
);

export const updateStock = (stock) => (
  {
    type: UPDATE_STOCK,
    payload: stock,
  }
);

export const setStockList = (stockList) => (
  {
    type: SET_STOCK_LIST,
    payload: stockList,
  }
);

export const setDetailedStock = (stock) => (
  {
    type: SET_DETAILED_STOCK,
    payload: stock,
  }
);

export const deleteDetailedStock = () => (
  {
    type: DELETE_DETAILED_STOCK,
  }
);

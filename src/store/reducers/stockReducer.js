import {
  ADD_STOCK,
  DELETE_STOCK,
  UPDATE_STOCK,
  SET_STOCK_LIST,
  SET_DETAILED_STOCK,
  DELETE_DETAILED_STOCK } from '../actions/types';


const initialState = {
  stockList: [],
  detailedStock: {},
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STOCK:
      return {
        ...state,
        stockList: state.stockList.concat(
          action.payload
        ),
      };
    case DELETE_STOCK:
      return {
        ...state,
        stockList: state.stockList.filter((item) =>
          item['01. symbol'] !== action.payload),
      };
    case UPDATE_STOCK:
      return {
        ...state,
        stockList: state.stockList.map((item) => {
          if (item.name === action.payload.name) {
            return action.payload;
          } else {
            return item;
          }
        }),
      };
    case SET_STOCK_LIST:
      return {
        ...state,
        stockList: action.payload,
      };
    case SET_DETAILED_STOCK:
      return {
        ...state,
        detailedStock: action.payload,
      };
    case DELETE_DETAILED_STOCK:
      return {
        ...state,
        detailedStock: {},
      };
    default:
      return state;
  }
};

export default stockReducer;

import {
  SET_SEARCH_RESULTS,
  DELETE_SEARCH_RESULTS,
  SET_SEARCH_KEYWORD,
  DELETE_SEARCH_KEYWORD } from '../actions/types';


const initialState = {
  searchResults: [],
  Keyword: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case DELETE_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: [],
      };
    case SET_SEARCH_KEYWORD:
      return {
        ...state,
        Keyword: action.payload,
      };
    case DELETE_SEARCH_KEYWORD:
      return {
        ...state,
        Keyword: '',
      };
    default:
      return state;
  }
};

export default searchReducer;

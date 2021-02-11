import {
  SET_SEARCH_RESULTS,
  DELETE_SEARCH_RESULTS,
  SET_SEARCH_KEYWORD,
  DELETE_SEARCH_KEYWORD } from '../actions/types';


export const setSearchResults = (searchResults) => (
  {
    type: SET_SEARCH_RESULTS,
    payload: searchResults,
  }
);

export const deleteSearchResults = () => (
  {
    type: DELETE_SEARCH_RESULTS,
  }
);

export const setSearchKeyword = (keyword) => (
  {
    type: SET_SEARCH_KEYWORD,
    payload: keyword,
  }
);

export const deleteSearchKeyword = () => (
  {
    type: DELETE_SEARCH_KEYWORD,
  }
);

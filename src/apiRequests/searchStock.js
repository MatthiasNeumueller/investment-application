import store from '../store';

import axios from 'axios';

import { API_KEY } from '../constants';


export const searchStock = async (text) => {
  store.dispatch({type:'SET_SEARCH_KEYWORD', payload: text});

  await axios.get('https://www.alphavantage.co/query', {
    params: {
      function: 'SYMBOL_SEARCH',
      keywords: text,
      apikey: API_KEY,
    },
  })
    .then((response) => {
      if (typeof response.data.bestMatches === 'undefined') {
        store.dispatch({type:'DELETE_SEARCH_RESULTS'});
      } else {
        store.dispatch({type:'SET_SEARCH_RESULTS', payload: response.data.bestMatches});
      }
    })
    .catch((e) => {
      console.log(e);
      store.dispatch({type:'DELETE_SEARCH_RESULTS'});
    });
};

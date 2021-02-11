/* eslint-disable no-alert */
import store from '../store';
// import { storeStocks } from './storeStocks';

import axios from 'axios';

import { API_KEY } from '../constants';


export const selectStock = async (searchItem, stockList) => {
  let stockExists = false;

  for (const stock of stockList) {
    if (stock['01. symbol'] === searchItem['1. symbol']) {
      stockExists = true;
    }
  }

  if (!stockExists) {
    await axios.get('https://www.alphavantage.co/query', {
    params: {
      function: 'GLOBAL_QUOTE',
      symbol: searchItem['1. symbol'],
      apikey: API_KEY,
    },
  })
    .then((response) => {
      const stock = response.data['Global Quote'];

      if (typeof stock === 'undefined') {
        alert('Too many API requests in the last minute have been made. Please wait one minute and try again.');
      } else {
        const name = searchItem['2. name'].split(' ');

        if (name.length > 1) {
          stock.name = name[0] + ' ' + name[1];
        } else {
          stock.name = searchItem['2. name'];
        }

        stock['02. open'] = parseFloat(stock['02. open']).toFixed(2);
        stock['03. high'] = parseFloat(stock['03. high']).toFixed(2);
        stock['04. low'] = parseFloat(stock['04. low']).toFixed(2);
        stock['05. price'] = parseFloat(stock['05. price']).toFixed(2);
        stock['10. change percent'] = parseFloat(stock['10. change percent']).toFixed(2);

        store.dispatch({type: 'ADD_STOCK', payload: stock});
        store.dispatch({type: 'SET_DETAILED_STOCK', payload: stock});
      }
    })
    .catch((e) => {
      console.log(e);
    });
  }

  store.dispatch({type: 'DELETE_SEARCH_RESULTS'});
  store.dispatch({type: 'DELETE_SEARCH_KEYWORD'});
};

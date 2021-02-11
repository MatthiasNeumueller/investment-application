import store from '../store';

import axios from 'axios';

import { CRYPTO_KEY } from '../constants';


export const getCryptoData = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.cryptoapis.io/v1/assets',
    params: {
      skip: 0,
      limit: 20,
      type: 'crypto',
    },
    headers: {
      'x-api-key': CRYPTO_KEY,
      'Content-Type': 'application/json',
    },
  };

  await axios.request(options).then((response) => {
    store.dispatch({type: 'UPDATE_CURRENCY_LIST', payload: response.data.payload});
  }).catch((e) => {
    console.log(e);
  });
};
